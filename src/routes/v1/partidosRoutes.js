const express = require("express")
const router = express.Router()
const partidosController = require("../../controllers/partidosController")

router.route("/").get(partidosController.getAllPartidos)


router.route("/:partido").get(partidosController.getOnePartido)
router.route("/ciudad/:ciudad").get(partidosController.checkCiudad);
router.route("/deporte/:deporte").get(partidosController.checkDeporte);
router.route("/filtros/ciudad=:ciudad/deporte=:deporte").get(partidosController.checkFiltros);
module.exports.router = router

