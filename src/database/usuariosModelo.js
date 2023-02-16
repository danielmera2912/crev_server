const usersData = require("./users.json");
const sessionsData = require("./sessions.json");
const fs = require("fs");
const datos = require("./users.json")


const checkUserEmail = (email, password) => {
  let idResultado = ""
  Object.keys(datos.users).forEach(function(id){
    let result = getOneUser(id)
    if(result.email.toLowerCase() === email.toLowerCase() && result.password === password) idResultado = id
  })
  return idResultado
};

const getOneUser = (id) => {
  const oneUser = datos.users[id]
  return oneUser;
}

const checkRegisterName = (name) => {
  let check = false
  Object.keys(datos.users).forEach(function(id){
    let result = getOneUser(id)
    if(result.name.toLowerCase() === name.toLowerCase()) check = true
  })
  return check
};
const checkRegisterEmail = (email) => {
  let check = false
  Object.keys(datos.users).forEach(function(id){
    let result = getOneUser(id)
    if(result.email.toLowerCase() === email.toLowerCase()) check = true
  })
  return check
};
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
const checkSession = (sessionId) => {
  return sessionsData.sessions.find(
    (session) => session.sessionId === sessionId
  );
};

const checkIfSessionExist = (id_usuario) => {
  return sessionsData.sessions.find((session) => session.id === id_usuario);
};

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
const getAllUsers = () => {
  return datos.users
}
const updateOneUser = (nuevoUser) => {
  const user = datos.users[nuevoUser.id]
  if(!user) return false;

  datos.users[nuevoUser.id] = nuevoUser
  fs.writeFileSync(
      "./src/database/users.json",
      JSON.stringify(datos, null, 2),
      "utf8"
  );

  return nuevoUser;
}
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
  getAllUsers
};