const express = require("express");
const router = express.Router();

router.get("/productos", (req, res) => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((productos) => res.send(productos));
});

module.exports = router;
