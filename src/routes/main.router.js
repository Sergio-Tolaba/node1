const express = require("express");
const router = express.Router();
//Traigo Ruta principal de index.js y modif app x router (modularizar)
router.get("/", (req, res) => {
  res.send("Hola Mundo!!!");
});

module.exports = router;
