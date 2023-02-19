const sessionsModelo = require("../database/sessionsModelo");

// Servicios de sesiones

// Obtener una sesión
const getOneSession = (id) => {
  const oneSession = sessionsModelo.checkSession(id)
  return oneSession;
}
// Eliminar una sesión
const deleteOneSession = (id) => {
  const session = sessionsModelo.checkSession(id);
  if (!session) {
    return false;
  }
  sessionsModelo.deleteOneSession(id);
  if (!sessionsModelo.checkSession(id)) {
    return session
  } else {
    return false
  }
};

module.exports = {
  getOneSession,
  deleteOneSession
};