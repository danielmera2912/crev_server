const datos = require("./sessions.json");
const fs = require("fs");
// Comprueba una sesión
const checkSession = (id) => {
  return datos.sessions.find(
    (session) => session.id === id
  );
};
//Comprueba si existe una sesión
const checkIfSessionExist = (id_usuario) => {
  return datos.sessions.find((session) => session.id === id_usuario);
};

// ELimina una sesión
const deleteOneSession = (id) => {
  const sessionIndex = datos.sessions.findIndex(
    (session) => session.id === id
  );
  if (sessionIndex === -1) {
    return false;
  }
  const deletedSession = datos.sessions.splice(sessionIndex, 1);
  fs.writeFileSync(
    "./src/database/sessions.json",
    JSON.stringify(datos, null, 2),
    "utf8"
  );
  return deletedSession[0];
};
module.exports = {
  checkSession,
  checkIfSessionExist,
  deleteOneSession,
};