const express = require("express")
const router = express.Router()
const sessionsController = require("../../../controllers/sessionsController")

// Se obtendrá una sesión y se eliminará una sesión
router.route("/:sessions").get(sessionsController.getOneSession)
                        .delete(sessionsController.deleteOneSession)
module.exports.router = router

