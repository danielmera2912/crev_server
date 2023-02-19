const usuariosModelo = require("../database/usuariosModelo");
const { v4: uuid } = require("uuid")
// Obtener todos los usuarios
const getAllUsers = () => {
    const allUsers = usuariosModelo.getAllUsers()
    return allUsers;
}
// Comprobar si un usuario existe mediante un email y contraseña
const checkUserEmail = (email, password) => {
    const id = usuariosModelo.checkUserEmail(email, password);
    if (!id) return false;
    return id;
};
// Comprobar si un usuario existe mediante un email
const checkRegisterEmail = (email) => {
    return usuariosModelo.checkRegisterEmail(email);
};
// Comprobar si existe un usuario mediante un username
const checkRegisterName = (name) => {
    return usuariosModelo.checkRegisterName(name);
};
const addSession = (id_usuario, id_sesion) => {
    if (!usuariosModelo.checkSession(id_sesion)) {
        usuariosModelo.addSession(id_usuario, id_sesion);
    }
};
// Crear un nuevo usuario
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
// Comprobar si existe una sesión mediante una id_sesion
const checkSession = (id_sesion) => {
    const session = usuariosModelo.checkSession(id_sesion);
    if (!session) return false;
    return session.sessionId;
};
// Comprobar si existe una sesión mediante un id_usuario
const checkIfSessionExist = (id_usuario) => {
    const session = usuariosModelo.checkIfSessionExist(id_usuario);
    if (!session) return false;
    return session.sessionId;
}
// Actualizar un usuario
const updateOneUser = (nuevoUser) => {
    const user = usuariosModelo.getOneUser(nuevoUser.id)
    if (!user) {
        return false
    }
    return usuariosModelo.updateOneUser(nuevoUser);
}
// Obtener un usuario por su id
const getOneUser = (id) => {
    const oneUser = usuariosModelo.getOneUser(id)
    return oneUser;
}
// Obtener un usuario por su email
const getOneUserEmail = (email) => {
    return usuariosModelo.getOneUserEmail(email);
}
// Eliminar un usuario
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
    getAllUsers,
    getOneUserEmail
};