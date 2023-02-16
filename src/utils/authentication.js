const { v1: uuid } = require("uuid");
const authenticationService = require("../services/usuariosServices");

const authenticateUser = (req, res, next) => {
  const { password, email } = req.body;
  const { cookies } = req;

  
  if (!password && !email && !cookies.sessionId) {
    console.log("1")
    console.log(password)
    console.log(email)
    res.status(401).send({ mensaje: "No tienes autorización" }).end();
    return;
  }

  if (req.body && password && email) {

    const id = authenticationService.checkUserEmail(email, password);
    if (!id) {
      console.log("2")
      res.status(401).send({ mensaje: "No tienes autorización" }).end();
      return;
    }

    let sessionId = authenticationService.checkIfSessionExist(id);
    if (!sessionId) {
      sessionId = uuid();
      authenticationService.addSession(id, sessionId);
    }

    res.cookie("sessionId", sessionId, { hhtpOnly: true });

    next();


  } else if (cookies.sessionId) {
    console.log("CHECK COOKIE");

    const { sessionId } = cookies;
    if (!authenticationService.checkSession(sessionId)) {
      console.log("3")
      res.status(401).send({ mensaje: "NO AUTORIZADO" }).end();
      return;
    }
    next();
  } else {
    throw new Error("Error desconocido");
  }
};

module.exports.authenticateUser = authenticateUser;