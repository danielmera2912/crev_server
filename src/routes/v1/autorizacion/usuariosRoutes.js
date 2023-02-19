const express = require("express")
const router = express.Router()
const usersController = require("../../../controllers/usuariosController")
// Se obtendrán todos los usuarios y se creará un nuevo usuario
router.route("/")
        .get(usersController.getAllUsers)
        .post(usersController.createOneUser)

// Se obtendrá un usuario por id, por email, además de actualizar un usuario y eliminarlo
router.route("/:user").get(usersController.getOneUser)
      .get(usersController.getOneUserEmail)
      .put(usersController.updateOneUser)
      .delete(usersController.deleteOneUser)
      
// se comprobarán los usuarios que tengan cierto email
router.route("/email/:email").get(usersController.checkRegisterEmail);
// se comprobarán los usuarios que tengan cierto email y se devolverá cierto usuario
router.route("/emailBuscar/:email").get(usersController.getOneUserEmail)
// se comprobarán los usuarios que tengan cierto username 
router.route("/name/:name").get(usersController.checkRegisterName)
module.exports.router = router

