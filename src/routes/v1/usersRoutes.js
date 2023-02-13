const express = require("express")
const router = express.Router()
const usersController = require("../../controllers/usersController")

router.route("/")
        .get(usersController.getAllUsers)
        .post(usersController.createOneUser)


router.route("/:user")
     .get(usersController.getOneUser)
     .put(usersController.updateOneUser)
     .delete(usersController.deleteOneUser)

module.exports.router = router

