const partidosModelo = require("../database/partidosModelo")
const { v4: uuid } = require("uuid")
const getAllPartidos = () => {
    const allPartidos = partidosModelo.getAllPartidos()
    return allPartidos;
}

const createOnePartido = (body) => {
    const partidoNuevo = {
        ...body,
        "id": uuid(),
        "fechaAlta": new Date().toLocaleDateString,
        "fechaModificacion": new Date().toLocaleTimeString
    };
    const partidoInsertado = partidosModelo.insertPartido(partidoNuevo)
    if (!partidoInsertado) return false
    return partidoInsertado
}
const checkCiudad = (ciudad) => {
    return partidosModelo.checkCiudad(ciudad);
};
const checkDeporte = (deporte) => {
    return partidosModelo.checkDeporte(deporte);
};
const checkFiltros = (ciudad,deporte) => {
    return partidosModelo.checkFiltros(ciudad,deporte);
};
const getOnePartido = (id) => {
    const onePartido = partidosModelo.getOnePartido(id)
    return onePartido;
}

const updateOnePartido = (nombre, nuevoPartido) => {
    const partido = partidosModelo.getOnePartido(nombre)
    if (!partido) {
        return false
    }
    return partidosModelo.updateOnePartido(nombre, nuevoPartido);
}

const deleteOnePartido = (nombre) => {
    const partido = partidosModelo.getOnePartido(nombre);
    if (!partido) {
        return false;
    }

    partidosModelo.deleteOnePartido(nombre);

    if (!partidosModelo.getOnePartido(nombre)) {

        return partido
    } else {
        return false
    }
};

module.exports = {
    getAllPartidos,
    createOnePartido,
    getOnePartido,
    updateOnePartido,
    deleteOnePartido,
    checkCiudad,
    checkDeporte,
    checkFiltros
}