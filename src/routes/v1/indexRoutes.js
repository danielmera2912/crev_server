const express = require("express")
const router = express.Router()
const partidosRoutes = require("./partidosRoutes")
const usersRoutes = require("./usuariosRoutes")
const sessionsRoutes = require("./sessionsRoutes")
// Esto es lo que se podrá realizar sin tener autenticación mediante una sesión iniciada
router.use("/partidos", partidosRoutes.router)
router.use("/users", usersRoutes.router)
router.use("/sessions", sessionsRoutes.router)
router.get("/", (req, res, next) => {
    res.send("Server iniciado")
})



module.exports.router = router