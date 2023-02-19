const partidosModelo = require("../database/partidosModelo")
const { v4: uuid } = require("uuid")
// Estos son los servicios de los partidos

// obtener todos los partidos
const getAllPartidos = () => {
    const allPartidos = partidosModelo.getAllPartidos()
    return allPartidos;
}
// crear un nuevo partido
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

// comprobar si existe una ciudad y devolver los partidos que cumplan la condición
const checkCiudad = (ciudad) => {
    return partidosModelo.checkCiudad(ciudad);
};

// comprobar si existe un deporte y devolver los partidos que cumplan la condición 
const checkDeporte = (deporte) => {
    return partidosModelo.checkDeporte(deporte);
};
// comprobar si existe un deporte y una ciudad y devolver los partidos que cumplan la condición
const checkFiltros = (ciudad, deporte) => {
    return partidosModelo.checkFiltros(ciudad, deporte);
};
// comprobar si existe un partido mediante la id
const getOnePartido = (id) => {
    const onePartido = partidosModelo.getOnePartido(id)
    return onePartido;
}
// actualizar un partido
const updateOnePartido = (nombre, nuevoPartido) => {
    const partido = partidosModelo.getOnePartido(nombre)
    if (!partido) {
        return false
    }
    return partidosModelo.updateOnePartido(nombre, nuevoPartido);
}
// eliminar un partido
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