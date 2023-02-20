const express = require("express")
const router = express.Router()
const sessionsController = require("../../controllers/sessionsController")

// obtener una sesión y eliminarla
router.route("/:sessions").get(sessionsController.getOneSession).delete(sessionsController.deleteOneSession)

module.exports.router = router

