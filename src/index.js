const express = require("express")
const cookieParser = require("cookie-parser");
const cors = require("cors")
const path = require("path")
const app = express()
const auth = require("./utils/authentication")
const rutasV1 = require("./routes/v1/indexRoutes")
const rutasV1Auth = require("./routes/v1/autorizacion/indexRoutes")
const PORT = process.env.PORT || 3001;

app.use(express.json())
app.use(cookieParser());
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}))

app.use("/api/v1", rutasV1.router);
app.use("/api/v1/autorizacion", auth.authenticateUser,rutasV1Auth.router);

app.use((err, req, res, next) => {
    console.error("ERROR:" + err.stack);
    res.end();
  });

  app.listen(PORT, () => {
    console.log(
      "\x1b[41m%s\x1b[0m",
      `[start] Servidor listo en el puerto ${PORT}`
    );
  });