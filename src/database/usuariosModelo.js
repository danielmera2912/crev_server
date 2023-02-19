const usersData = require("./users.json");
const sessionsData = require("./sessions.json");
const fs = require("fs");
const datos = require("./users.json")

// Comprueba si un usuario existe mediante un email y devuelve la id del usuario
const checkUserEmail = (email, password) => {
  let idResultado = ""
  Object.keys(datos.users).forEach(function (id) {
    let result = getOneUser(id)
    if (result.email.toLowerCase() === email.toLowerCase() && result.password === password) idResultado = id
  })
  return idResultado
};
// Devuelve un usuario en concreto
const getOneUser = (id) => {
  const oneUser = datos.users[id]
  return oneUser;
}
// Comprueba si existe un username de un usuario
const checkRegisterName = (name) => {
  let check = false
  Object.keys(datos.users).forEach(function (id) {
    let result = getOneUser(id)
    if (result.name.toLowerCase() === name.toLowerCase()) check = true
  })
  return check
};
// Comprueba si existe un email de un usuario
const checkRegisterEmail = (email) => {
  let check = false
  Object.keys(datos.users).forEach(function (id) {
    let result = getOneUser(id)
    if (result.email.toLowerCase() === email.toLowerCase()) check = true
  })
  return check
};
// Obtiene un usuario a través de su email
const getOneUserEmail = (email) => {
  let json = []
  Object.keys(datos.users).forEach(function (id) {
    let result = getOneUser(id)
    if (result.email.toLowerCase() === email.toLowerCase()) json.push(datos.users[result.id])
  })
  return json
}
// Inserta un nuevo usuario
const insertUser = (user) => {
  const id = user.id
  datos.users[id] = user

  fs.writeFileSync(
    "./src/database/users.json",
    JSON.stringify(datos, null, 2),
    "utf8"
  );

  return user;
}
// Comprueba si existe una sesión mediante una sessionId
const checkSession = (sessionId) => {
  return sessionsData.sessions.find(
    (session) => session.sessionId === sessionId
  );
};
// Comprueba si existe una sesión mediante un id_usuario
const checkIfSessionExist = (id_usuario) => {
  return sessionsData.sessions.find((session) => session.id === id_usuario);
};
// Se añade una nueva sesión
const addSession = (id, sessionId) => {
  sessionsData.sessions.push({ id, sessionId });
  fs.writeFile(
    "./src/database/sessions.json",
    JSON.stringify(sessionsData, null, 2),
    "utf8",
    (err) => {
      throw new Error("error");
    }
  );
};
// Se obtienen todos los usuarios
const getAllUsers = () => {
  return datos.users
}
// Se actualiza un usuario en concreto
const updateOneUser = (nuevoUser) => {
  const user = datos.users[nuevoUser.id]
  if (!user) return false;

  datos.users[nuevoUser.id] = nuevoUser
  fs.writeFileSync(
    "./src/database/users.json",
    JSON.stringify(datos, null, 2),
    "utf8"
  );

  return nuevoUser;
}
// Se elimina un usuario en concreto
const deleteOneUser = (id) => {
  delete datos.users[id];
  fs.writeFileSync(
    "./src/database/users.json",
    JSON.stringify(datos, null, 2),
    "utf8"
  );
};
module.exports = {
  checkUserEmail,
  addSession,
  checkSession,
  checkIfSessionExist,
  insertUser,
  checkRegisterName,
  checkRegisterEmail,
  getOneUser,
  updateOneUser,
  deleteOneUser,
  getAllUsers,
  getOneUserEmail
};