const express = require("express")
const router = express.Router()
const partidosController = require("../../../controllers/partidosController")
// se obtendrán todos los partidos y crear un partido
router.route("/")
        .get(partidosController.getAllPartidos)
        .post(partidosController.createOnePartido)

// Se obtendrá un partido, actualizar un partido y eliminar un partido
router.route("/:partido")
     .get(partidosController.getOnePartido)
     .put(partidosController.updateOnePartido)
     .delete(partidosController.deleteOnePartido)

module.exports.router = router

