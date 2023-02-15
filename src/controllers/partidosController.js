const partidosService = require("../services/partidosServices")

const getAllPartidos = ((req, res, next) => {
    const allPartidos = partidosService.getAllPartidos();
    if (allPartidos) {
        res.send(allPartidos)
    } else {
        res.status(404).end()
    }
})

const createOnePartido = ((req, res, next) => {
    const { body } = req
    if (!body.deporte || !body.jugador1 || !body.ciudad || !body.fecha || !body.hora) {
        res.status(400).end()
    } else {
        const newPartido = {
            "deporte": body.deporte,
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
        const createdPartido = partidosService.createOnePartido(newPartido);
        if (createdPartido) res.status(200).send(createdPartido);
        else res.status(406).end();
    }

    res.end()
})

const getOnePartido = ((req, res, next) => {
    let partido = req.params.partido
    const onePartido = partidosService.getOnePartido(partido)
    if (onePartido) {
        res.send(onePartido)
    } else {
        res.status(404).end()
    }
})
const checkCiudad = ((req, res, next) => {
    const ciudad = req.params.ciudad
    if(!ciudad){
        res.status(400).end();
    }
    else{
        res.send(partidosService.checkCiudad(ciudad));
    }
})
const checkDeporte = ((req, res, next) => {
    const deporte = req.params.deporte
    if(!deporte){
        res.status(400).end();
    }
    else{
        res.send(partidosService.checkDeporte(deporte));
    }
})
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

module.exports = {
    getAllPartidos,
    createOnePartido,
    getOnePartido,
    updateOnePartido,
    deleteOnePartido,
    checkCiudad,
    checkDeporte
}