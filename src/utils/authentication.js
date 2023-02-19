const { v1: uuid } = require("uuid");
const authenticationService = require("../services/usuariosServices");

// Función middleware que se encarga de autenticar al usuario
const authenticateUser = (req, res, next) => {
  // Obtener email, password y sessionId (si existe) de la request
  const { password, email } = req.body;
  const { cookies } = req;

  // Si no se proporcionan los datos necesarios, enviar mensaje de error
  if (!password && !email && !cookies.sessionId) {
    res.status(401).send({ mensaje: "No tienes autorización" }).end();
    return;
  }

  // Si se proporcionan email y password, verificar la identidad del usuario
  if (req.body && password && email) {

    // Obtener el id del usuario con el email y password proporcionados
    const id = authenticationService.checkUserEmail(email, password);
    if (!id) {
      res.status(401).send({ mensaje: "No tienes autorización" }).end();
      return;
    }

    // Verificar si el usuario ya tiene una sesión activa
    let sessionId = authenticationService.checkIfSessionExist(id);
    if (!sessionId) {
      // Si el usuario no tiene sesión, crear una nueva
      sessionId = uuid();
      authenticationService.addSession(id, sessionId);
    }

    // Establecer una cookie con el sessionId
    res.cookie("sessionId", sessionId, {httpOnly: true, secure: true, sameSite: 'none'});

    // Llamar a la función siguiente del middleware
    next();

  // Si ya hay una cookie sessionId, verificar si el usuario tiene una sesión activa
  } else if (cookies.sessionId) {
    console.log("CHECK COOKIE");
    const { sessionId } = cookies;
    if (!authenticationService.checkSession(sessionId)) {
      res.status(401).send({ mensaje: "NO AUTORIZADO" }).end();
      return;
    }
    // Si la sesión es válida, llamar a la función siguiente del middleware
    next();
  } else {
    // Si no se cumplen las condiciones anteriores, lanzar un error
    throw new Error("Error desconocido");
  }
};


module.exports.authenticateUser = authenticateUser;