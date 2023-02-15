const express = require("express")
const router = express.Router()
const partidosRoutes = require("./partidosRoutes")

router.use("/partidos", partidosRoutes.router)
// router.use("/users", usersRoutes.router)

router.get("/", (req, res, next)=>{
    res.send("Hola mundo")
})



module.exports.router = router