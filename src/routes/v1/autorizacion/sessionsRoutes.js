const express = require("express")
const router = express.Router()
const sessionsController = require("../../../controllers/sessionsController")


router.route("/:sessions").get(sessionsController.getOneSession)
                        .delete(sessionsController.deleteOneSession)
module.exports.router = router

