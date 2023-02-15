const express = require("express")
const router = express.Router()
const partidosController = require("../../../controllers/partidosController")

router.route("/")
        .get(partidosController.getAllPartidos)
        .post(partidosController.createOnePartido)


router.route("/:partido")
     .get(partidosController.getOnePartido)
     .put(partidosController.updateOnePartido)
     .delete(partidosController.deleteOnePartido)

module.exports.router = router

