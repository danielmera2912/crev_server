const express = require("express")
const router = express.Router()
const usersController = require("../../controllers/usuariosController")
// obtener todos los usuarios y crear un nuevo usuario
router.route("/")
        .get(usersController.getAllUsers)
        .post(usersController.createOneUser)

// obtener un usuario por su id y por su email
router.route("/:user").get(usersController.getOneUser)
// obtener un boolean dependiendo de si un email existe      
router.route("/email/:email").get(usersController.checkRegisterEmail);
// obtener un usuario dependiendo de su un email    
router.route("/emailBuscar/:email").get(usersController.getOneUserEmail)
// obtener un boolean dependiendo de si un username existe    
router.route("/name/:name").get(usersController.checkRegisterName)
module.exports.router = router

