const express = require("express")
const router = express.Router()
const sessionsController = require("../../controllers/sessionsController")

// obtener una sesión
router.route("/:sessions").get(sessionsController.getOneSession)

module.exports.router = router

