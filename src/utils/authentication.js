const { v1: uuid } = require("uuid");
const authenticationService = require("../services/usuariosServices");

const authenticateUser = (req, res, next) => {
  const { password, email } = req.body;
  const { cookies } = req;

  
  if (!password && !email && !cookies.sessionId) {
    res.status(401).send({ mensaje: "No tienes autorización" }).end();
    return;
  }

  if (req.body && password && email) {

    const id = authenticationService.checkUserEmail(email, password);
    if (!id) {
      res.status(401).send({ mensaje: "No tienes autorización" }).end();
      return;
    }

    let sessionId = authenticationService.checkIfSessionExist(id);
    if (!sessionId) {
      sessionId = uuid();
      authenticationService.addSession(id, sessionId);
    }

    res.cookie("sessionId", sessionId, {httpOnly: true, secure: true, sameSite: 'none'});

    next();


  } else if (cookies.sessionId) {
    console.log("CHECK COOKIE");
    const { sessionId } = cookies;
    if (!authenticationService.checkSession(sessionId)) {
      res.status(401).send({ mensaje: "NO AUTORIZADO" }).end();
      return;
    }
    next();
  } else {
    throw new Error("Error desconocido");
  }
};



module.exports.authenticateUser = authenticateUser;