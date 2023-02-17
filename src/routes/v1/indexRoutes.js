const express = require("express")
const router = express.Router()
const partidosRoutes = require("./partidosRoutes")
const usersRoutes = require("./usuariosRoutes")
const sessionsRoutes = require("./sessionsRoutes")

router.use("/partidos", partidosRoutes.router)
router.use("/users", usersRoutes.router)
router.use("/sessions", sessionsRoutes.router)
router.get("/", (req, res, next)=>{
    res.send("Hola mundo")
})



module.exports.router = router