const express = require("express")
const router = express.Router()
const usersController = require("../../controllers/usuariosController")

router.route("/")
        .get(usersController.getAllUsers)
        .post(usersController.createOneUser)


router.route("/:user").get(usersController.getOneUser)
      .put(usersController.updateOneUser)
      .delete(usersController.deleteOneUser)
      
router.route("/email/:email").get(usersController.checkRegisterEmail);
router.route("/name/:name").get(usersController.checkRegisterName)
module.exports.router = router

