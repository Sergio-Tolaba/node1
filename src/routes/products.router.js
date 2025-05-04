const express = require("express");
const router = express.Router();

//nva ruta /productos desde fakesotreapi
// router.get("/productos", (req, res) => {
//   fetch("https://fakestoreapi.com/products")
//     .then((res) => res.json())
//     .then((productos) => res.send(productos));
// });
//buscar 1 producto fakestoreapi x id=>/productos/:idapi
router.get("/productos/:id", (req, res) => {
  fetch("https://fakestoreapi.com/products/" + req.params.id)
    .then((res) => res.json())
    .then((producto) => res.send(producto));
});
//limitar busqueda con query
router.get("/productos", (req, res) => {
  const limit = req.query.limit;
  const url = limit
    ? `https://fakestoreapi.com/products?limit=${limit}`
    : `https://fakestoreapi.com/products`;
  fetch(url)
    .then((res) => res.json())
    .then((productos) => res.send(productos));
});
module.exports = router;
