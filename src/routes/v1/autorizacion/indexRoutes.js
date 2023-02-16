const express = require("express")
const router = express.Router()
const partidosRoutes = require("./partidosRoutes")

router.use("/partidos", partidosRoutes.router)
// router.use("/users", usersRoutes.router)

router.post("/", (req, res, next)=>{
    res.send("OK")
})



module.exports.router = router