const datos = require("./partidos.json")
const fs = require("fs")

//Modelo de los partidos

// Función que obtiene todos los partidos
const getAllPartidos = () => {
  return datos.partidos
}

// Función que obtiene un partido
const getOnePartido = (id) => {
  const onePartido = datos.partidos[id]
  return onePartido;
}
// Función que actualiza un partido
const updateOnePartido = (nombre, nuevoPartido) => {
  const partido = datos.partidos[nombre]
  if (!partido) return false;

  datos.partidos[nombre] = nuevoPartido
  fs.writeFileSync(
    "./src/database/partidos.json",
    JSON.stringify(datos, null, 2),
    "utf8"
  );

  return nuevoPartido;
}
// Función que crea un partido
const createOnePartido = (partido) => {
  return partido
}
// Función que inserta un nuevo partido
const insertPartido = (partido) => {
  const id = partido.id
  datos.partidos[id] = partido

  fs.writeFileSync(
    "./src/database/partidos.json",
    JSON.stringify(datos, null, 2),
    "utf8"
  );

  return partido;
}
// Función que comprueba si una ciudad se encuentra en el partido y devuelve los resultados
const checkCiudad = (ciudad) => {
  let json = []
  Object.keys(datos.partidos).forEach(function (id) {
    let result = getOnePartido(id)
    if (result.ciudad.toLowerCase().indexOf(ciudad.toLowerCase()) !== -1) json.push(datos.partidos[result.id])
  })
  return json
};
// Función que comprueba si un deporte se encuentra en el partido y devuelve los resultados
const checkDeporte = (deporte) => {
  let json = []
  Object.keys(datos.partidos).forEach(function (id) {
    let result = getOnePartido(id)
    if (result.deporte.toLowerCase().indexOf(deporte.toLowerCase()) !== -1) json.push(datos.partidos[result.id])
  })
  return json
};
// Función que comprueba si una ciudad y un deporte se encuentra en el partido y devuelve los resultados
const checkFiltros = (ciudad, deporte) => {
  let json = []
  Object.keys(datos.partidos).forEach(function (id) {
    let result = getOnePartido(id)
    if (result.deporte.toLowerCase().indexOf(
      deporte.toLowerCase()) !== -1 && result.ciudad.toLowerCase().indexOf(ciudad.toLowerCase()) !== -1)
      json.push(datos.partidos[result.id])
  })
  return json
};
// Función que elimina un partido
const deleteOnePartido = (nombre) => {
  delete datos.partidos[nombre];
  fs.writeFileSync(
    "./src/database/partidos.json",
    JSON.stringify(datos, null, 2),
    "utf8"
  );
};
module.exports = {
  getAllPartidos,
  createOnePartido,
  getOnePartido,
  updateOnePartido,
  deleteOnePartido,
  insertPartido,
  checkCiudad,
  checkDeporte,
  checkFiltros
}