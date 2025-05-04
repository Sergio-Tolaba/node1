const express = require("express");
const router = express.Router();

//nva ruta /productos desde fakesotreapi
router.get("/productos", (req, res) => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((productos) => res.send(productos));
});
//buscar 1 producto fakestoreapi x id=>/productos/:idapi
router.get("/productos/:id", (req, res) => {
  fetch("https://fakestoreapi.com/products/" + req.params.id)
    .then((res) => res.json())
    .then((producto) => res.send(producto));
});

module.exports = router;
