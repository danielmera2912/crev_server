const datos = require("./partidos.json")
const fs = require("fs")
const getAllPartidos = () => {
    return datos.partidos
}
const getOnePartido = (id) => {
    const onePartido = datos.partidos[id]
    return onePartido;
}

  const updateOnePartido = (nombre, nuevoPartido) => {
    const partido = datos.partidos[nombre]
    if(!partido) return false;

    datos.partidos[nombre] = nuevoPartido
    fs.writeFileSync(
        "./src/database/partidos.json",
        JSON.stringify(datos, null, 2),
        "utf8"
    );

    return nuevoPartido;
}
const createOnePartido = (partido) => {
    return partido
}
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
const checkCiudad = (ciudad) => {
    let json = []
    Object.keys(datos.partidos).forEach(function(id){
      let result = getOnePartido(id)
      if(result.ciudad.toLowerCase().indexOf(ciudad.toLowerCase())!==-1) json.push(datos.partidos[result.id])
    })
    return json
  };
  const checkDeporte = (deporte) => {
    let json = []
    Object.keys(datos.partidos).forEach(function(id){
      let result = getOnePartido(id)
      if(result.deporte.toLowerCase().indexOf(deporte.toLowerCase())!==-1) json.push(datos.partidos[result.id])
    })
    return json
  };
  const checkFiltros = (ciudad,deporte) => {
    let json = []
    Object.keys(datos.partidos).forEach(function(id){
      let result = getOnePartido(id)
      if(result.deporte.toLowerCase().indexOf(
        deporte.toLowerCase())!==-1 && result.ciudad.toLowerCase().indexOf(ciudad.toLowerCase())!==-1) 
        json.push(datos.partidos[result.id])
    })
    return json
  };
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