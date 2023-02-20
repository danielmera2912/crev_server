const express = require("express")
const router = express.Router()
const partidosController = require("../../controllers/partidosController")
// las rutas para:
// se obtendrán todos los partidos y crear un partido
router.route("/")
        .get(partidosController.getAllPartidos)
        .post(partidosController.createOnePartido)
// Se obtendrá un partido, actualizar un partido y eliminar un partido
router.route("/:partido")
     .get(partidosController.getOnePartido)
     .put(partidosController.updateOnePartido)
     .delete(partidosController.deleteOnePartido)
// obtener un partido mediante su ciudad
router.route("/ciudad/:ciudad").get(partidosController.checkCiudad);
// obtener un partido mediante su deporte
router.route("/deporte/:deporte").get(partidosController.checkDeporte);
// obtener un partido mediante su ciudad y su deporte
router.route("/filtros/ciudad=:ciudad/deporte=:deporte").get(partidosController.checkFiltros);
module.exports.router = router

