const express = require("express")
const cookieParser = require("cookie-parser");
const cors = require("cors")
const path = require("path")
const app = express()
const auth = require("./utils/authentication")
const rutasV1 = require("./routes/v1/indexRoutes")
const rutasV1Auth = require("./routes/v1/autorizacion/indexRoutes")
const PORT = process.env.PORT || 3001;

// Incluimos el middleware express.json() para poder parsear las solicitudes HTTP que contienen cuerpos en formato JSON.
app.use(express.json());

// Incluimos el middleware cookieParser() para poder leer y escribir cookies.
app.use(cookieParser());

// Incluimos el middleware cors para permitir peticiones desde un origen específico y para permitir el envío de cookies.
app.use(cors({
  origin: "http://localhost:5173",  // Origen permitido de las solicitudes.
  credentials: true  // Habilita el uso de cookies por parte del cliente.
}));

// Asociamos las rutas de la API a la ruta /api/v1.
app.use("/api/v1", rutasV1.router);

// Asociamos las rutas de autorización de la API a la ruta /api/v1/autorizacion y usamos el middleware authenticateUser para asegurar que el usuario está autenticado.
app.use("/api/v1/autorizacion", auth.authenticateUser, rutasV1Auth.router);

// Definimos un middleware para manejar errores que ocurren en la aplicación.
app.use((err, req, res, next) => {
    console.error("ERROR:" + err.stack);
    res.end();
});

// Iniciamos el servidor y escuchamos en el puerto especificado.
app.listen(PORT, () => {
    console.log(
      "\x1b[41m%s\x1b[0m",
      `[start] Servidor listo en el puerto ${PORT}`
    );
});
