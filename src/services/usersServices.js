const usersModelo = require("../database/usersModelo")
const getAllUsers = () => {
    const allUsers = usersModelo.getAllUsers()
    return allUsers;
}

const createOneUser = (body) => {
    const userNuevo = {
        ...body,
        "id": body.name,
        "fechaAlta": new Date().toLocaleDateString,
        "fechaModificacion": new Date().toLocaleTimeString
    };
    const userInsertado = usersModelo.insertUser(userNuevo)
    if (!userInsertado) return false
    return userInsertado
}

const getOneUser = (id) => {
    const oneUser = usersModelo.getOneUser(id)
    return oneUser;
}

const updateOneUser = (nombre, nuevoUser) => {
    const user = usersModelo.getOneUser(nombre)
    if (!user) {
        return false
    }
    return usersModelo.updateOneUser(nombre, nuevoUser);
}

const deleteOneUser = (nombre) => {
    const user = usersModelo.getOneUser(nombre);
    if (!user) {
        return false;
    }

    usersModelo.deleteOneUser(nombre);

    if (!usersModelo.getOneUser(nombre)) {

        return user
    } else {
        return false
    }
};

module.exports = {
    getAllUsers,
    createOneUser,
    getOneUser,
    updateOneUser,
    deleteOneUser
}