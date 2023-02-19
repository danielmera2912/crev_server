// Se importa el módulo de servicios para partidos
const partidosService = require("../services/partidosServices")

// Se define el controlador para obtener todos los partidos
const getAllPartidos = ((req, res, next) => {
    // Se obtienen todos los partidos mediante el método del servicio
    const allPartidos = partidosService.getAllPartidos();
    // Si se encontraron partidos, se envían como respuesta
    if (allPartidos) {
        res.send(allPartidos)
    } else {
        // Si no se encontraron partidos, se envía un código de respuesta 404
        res.status(404).end()
    }
})

// Se define el controlador para crear un nuevo partido
const createOnePartido = ((req, res, next) => {
    // Se obtiene el cuerpo de la petición
    const { body } = req
    // Si alguno de los campos obligatorios del partido no se encuentra en el cuerpo de la petición, se envía un código de respuesta 400
    if (!body.deporte || !body.jugador1 || !body.ciudad || !body.fecha || !body.hora) {
        res.status(400).end()
    } else {
        // Si se encuentran todos los campos obligatorios, se crea un objeto de nuevo partido con la información proporcionada
        const newPartido = {
            "deporte": body.deporte,
            "idJugador1": body.idJugador1,
            "idJugador2": body.idJugador2,
            "idJugador3": body.idJugador3,
            "idJugador4": body.idJugador4,
            "idJugador5": body.idJugador5,
            "idJugador6": body.idJugador6,
            "idJugador7": body.idJugador7,
            "idJugador8": body.idJugador8,
            "idJugador9": body.idJugador9,
            "idJugador10": body.idJugador10,
            "jugador1": body.jugador1,
            "jugador2": body.jugador2,
            "jugador3": body.jugador3,
            "jugador4": body.jugador4,
            "jugador5": body.jugador5,
            "jugador6": body.jugador6,
            "jugador7": body.jugador7,
            "jugador8": body.jugador8,
            "jugador9": body.jugador9,
            "jugador10": body.jugador10,
            "equipo1": body.equipo1,
            "equipo2": body.equipo2,
            "ciudad": body.ciudad,
            "fecha": body.fecha,
            "hora": body.hora,
            "imagen1": body.imagen1,
            "imagen2": body.imagen2,
            "imagen3": body.imagen3,
            "imagen4": body.imagen4,
            "imagen5": body.imagen5,
            "imagen6": body.imagen6,
            "imagen7": body.imagen7,
            "imagen8": body.imagen8,
            "imagen9": body.imagen9,
            "imagen10": body.imagen10
        }
        // Se crea el nuevo partido mediante el método del servicio
        const createdPartido = partidosService.createOnePartido(newPartido);
        // Si se creó correctamente, se envía como respuesta con un código 200
        if (createdPartido) res.status(200).send(createdPartido);
        else res.status(406).end();
    }

    res.end()
})
// Función para obtener un partido en particular
const getOnePartido = ((req, res, next) => {
    let partido = req.params.partido
    const onePartido = partidosService.getOnePartido(partido)
    if (onePartido) {
        res.send(onePartido)
    } else {
        res.status(404).end()
    }
})
// Función para verificar si existe una ciudad determinada y devolverlo
const checkCiudad = ((req, res, next) => {
    const ciudad = req.params.ciudad
    if (!ciudad) {
        res.status(400).end();
    }
    else {
        res.send(partidosService.checkCiudad(ciudad));
    }
})
// Función para verificar si existe un deporte determinado y devolverlo
const checkDeporte = ((req, res, next) => {
    const deporte = req.params.deporte
    if (!deporte) {
        res.status(400).end();
    }
    else {
        res.send(partidosService.checkDeporte(deporte));
    }
})
// Función para verificar si existen filtros de ciudad y deporte y devolverlos
const checkFiltros = ((req, res, next) => {
    const ciudad = req.params.ciudad
    const deporte = req.params.deporte
    if (!ciudad && !deporte) {
        res.status(400).end();
    }
    else {
        res.send(partidosService.checkFiltros(ciudad, deporte));
    }
})
// Función para actualizar un partido existente
const updateOnePartido = ((req, res, next) => {
    let partido = req.params.partido;
    let nuevoPartido = req.body;
    const partidoUpdate = partidosService.updateOnePartido(partido, nuevoPartido)
    if (!partidoUpdate) {
        res.status(400).send({ mensaje: "El partido no ha sido actualizado" }).end();
        res.locals.mensaje = "ERROR";
    } else {
        res.send(partidoUpdate).end();
        res.locals.mensaje = "OK";
    }
})

// Función para eliminar un partido existente
const deleteOnePartido = (req, res, next) => {
    let { partido } = req.params;

    const partidoEliminado = partidosService.deleteOnePartido(partido);

    if (!partidoEliminado) {
        res.status(400).send({ mensaje: "El partido no ha sido eliminado" }).end();
        res.locals.mensaje = "ERROR";
    } else {
        res.send(partidoEliminado).end();
        res.locals.mensaje = "OK";
    }
    next();
};
// Exportación de las funciones para ser utilizadas en otros archivos
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