const datos = require("./users.json")
const fs = require("fs")
const getAllUsers = () => {
    return datos.users
}
const getOneUser = (id) => {
    const oneUser = datos.users[id]
    return oneUser;
}
const deleteOneUser = (nombre) => {
    delete datos.users[nombre];
    fs.writeFileSync(
      "./src/database/users.json",
      JSON.stringify(datos, null, 2),
      "utf8"
    );
  };
  const updateOneUser = (nombre, nuevoUser) => {
    const user = datos.users[nombre]
    if(!user) return false;

    datos.users[nombre] = nuevoUser
    fs.writeFileSync(
        "./src/database/users.json",
        JSON.stringify(datos, null, 2),
        "utf8"
    );

    return nuevoUser;
}
const createOneUser = (user) => {
    return user
}
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
module.exports = {
    getAllUsers,
    createOneUser,
    getOneUser,
    updateOneUser,
    deleteOneUser,
    insertUser
}