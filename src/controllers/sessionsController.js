const sessionsService = require("../services/sessionsServices");



const getOneSession = ((req, res, next) => {
    let session = req.params.sessions
    const oneSession = sessionsService.getOneSession(session)
    if (oneSession) {
        res.send(oneSession)
    } else {
        res.status(404).end()
    }
})




const deleteOneSession = (req, res, next) => {
    const id = req.params.sessions;
    const sessionEliminado = sessionsService.deleteOneSession(id);
  
    if (!sessionEliminado) {
      res.status(400).send({ mensaje: "La sesión no ha sido eliminada" }).end();
      res.locals.mensaje = "ERROR";
    } else {
      res.send(sessionEliminado).end();
      res.locals.mensaje = "OK";
    }
    next();
  };

module.exports = {
    getOneSession,
    deleteOneSession,
}