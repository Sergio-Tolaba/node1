const path = require("path");
const index = (req, res) => {
  //res.send("Hola Mundo!!!"); Texto plano pero quiero un html y luego un html dinámico(.ejs)
  //res.sendFile("../../private/index.html");=>TypeError: path must be absolute or specify root to res.sendFile=>requerir path
  res.sendFile(path.resolve("__dirname,../../private/index.html")); //resuelve la ruta
  //console.log(__dirname); // muestra la ruta en la cual estoy (relativa=>absoluta-dinámica)
};

module.exports = {
  index,
};
