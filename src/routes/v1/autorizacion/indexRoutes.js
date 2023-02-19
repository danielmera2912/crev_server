const express = require("express")
const router = express.Router()
const partidosRoutes = require("./partidosRoutes")
const usuariosRoutes = require("./usuariosRoutes")
const sessionsRoutes = require("./sessionsRoutes")

router.use("/partidos", partidosRoutes.router)
router.use("/users", usuariosRoutes.router)
router.use("/sessions", sessionsRoutes.router)

router.post("/", (req, res, next)=>{
    res.send("OK")
})



module.exports.router = router