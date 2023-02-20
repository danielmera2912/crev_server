const express = require("express")
const router = express.Router()
const partidosController = require("../../controllers/partidosController")
// las rutas para:

// obtener todos los partidos
router.route("/").get(partidosController.getAllPartidos).post(partidosController.createOnePartido)

// obtener un partido
router.route("/:partido").get(partidosController.getOnePartido)
// obtener un partido mediante su ciudad
router.route("/ciudad/:ciudad").get(partidosController.checkCiudad);
// obtener un partido mediante su deporte
router.route("/deporte/:deporte").get(partidosController.checkDeporte);
// obtener un partido mediante su ciudad y su deporte
router.route("/filtros/ciudad=:ciudad/deporte=:deporte").get(partidosController.checkFiltros);
module.exports.router = router

