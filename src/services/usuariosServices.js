const usuariosModelo = require("../database/usuariosModelo");
const { v4: uuid } = require("uuid")
const getAllUsers = () => {
    const allUsers = usuariosModelo.getAllUsers()
    return allUsers;
}
const checkUserEmail = (email, password) => {
    const id = usuariosModelo.checkUserEmail(email, password);
    if (!id) return false;
    return id;
};
const checkRegisterEmail = (email) => {
    return usuariosModelo.checkRegisterEmail(email);
};

const checkRegisterName = (name) => {
    return usuariosModelo.checkRegisterName(name);
};
const addSession = (id_usuario, id_sesion) => {
    if (!usuariosModelo.checkSession(id_sesion)) {
        usuariosModelo.addSession(id_usuario, id_sesion);
    }
};
const createOneUser = (body) => {
    const userNuevo = {
        ...body,
        "id": uuid(),
        "fechaAlta": new Date().toLocaleDateString,
        "fechaModificacion": new Date().toLocaleTimeString
    };
    const userInsertado = usuariosModelo.insertUser(userNuevo)
    if (!userInsertado) return false
    return userInsertado
}
const checkSession = (id_sesion) => {
    const session = usuariosModelo.checkSession(id_sesion);
    if (!session) return false;
    return session.sessionId;
};

const checkIfSessionExist = (id_usuario) => {
    const session = usuariosModelo.checkIfSessionExist(id_usuario);
    if (!session) return false;
    return session.sessionId;
}
const updateOneUser = (nuevoUser) => {
    const user = usuariosModelo.getOneUser(nuevoUser.id)
    if (!user) {
        return false
    }
    return usuariosModelo.updateOneUser(nuevoUser);
}
const getOneUser = (id) => {
    const oneUser = usuariosModelo.getOneUser(id)
    return oneUser;
}
const deleteOneUser = (id) => {
    const user = usuariosModelo.getOneUser(id);
    if (!user) {
        return false;
    }
    usuariosModelo.deleteOneUser(id);
    if (!usuariosModelo.getOneUser(id)) {
        return user
    } else {
        return false
    }
};
module.exports = {
    createOneUser,
    checkUserEmail,
    addSession,
    checkSession,
    checkIfSessionExist,
    checkRegisterEmail,
    checkRegisterName,
    updateOneUser,
    getOneUser,
    deleteOneUser,
    getAllUsers
};