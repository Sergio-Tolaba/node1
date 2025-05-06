const express = require("express");
const router = express.Router();
const controller = require("../controllers/main.controller");
//Traigo Ruta principal de index.js y modif app x router (modularizar)
//Funciones pasan al controller (Modelo Vista Controlador=MVC)
//Controlador recibe las peticiones que llegan desde las rutas. Controlador puede llamar a 1 o + modelos que traen la info de la db(Luego puede llamar a las vistas para que renderice en el cliente//En API no se usan views.)En las API no hace falta la Vista(View) manejan los datos en formato JSON
router.get("/", controller.index);

module.exports = router;
