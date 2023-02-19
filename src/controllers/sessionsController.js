const sessionsService = require("../services/sessionsServices");


// Controlador que obtiene una sesión por ID y la devuelve en la respuesta
const getOneSession = ((req, res, next) => {
  let session = req.params.sessions // Se obtiene el ID de la sesión de los parámetros de la solicitud
  const oneSession = sessionsService.getOneSession(session) // Se llama al servicio de sesiones para obtener la sesión correspondiente al ID
  if (oneSession) { // Si se encontró la sesión, se envía en la respuesta
    res.send(oneSession)
  } else { // Si no se encontró la sesión, se envía un código de estado 404 (no encontrado)
    res.status(404).end()
  }
})



// Controlador que elimina una sesión por ID
const deleteOneSession = (req, res, next) => {
  const id = req.params.sessions; // Se obtiene el ID de la sesión a eliminar de los parámetros de la solicitud
  const sessionEliminado = sessionsService.deleteOneSession(id); // Se llama al servicio de sesiones para eliminar la sesión correspondiente al ID

  if (!sessionEliminado) { // Si la sesión no se pudo eliminar, se envía un código de estado 400 (solicitud incorrecta) y un mensaje de error
    res.status(400).send({ mensaje: "La sesión no ha sido eliminada" }).end();
    res.locals.mensaje = "ERROR";
  } else { // Si la sesión se eliminó correctamente, se envía en la respuesta un objeto con la sesión eliminada y un mensaje de éxito
    res.send(sessionEliminado).end();
    res.locals.mensaje = "OK";
  }
  next(); // Se llama a la siguiente función de middleware en la cadena (si la hay)
};

module.exports = {
  getOneSession,
  deleteOneSession,
}