const querystring = require("querystring");

const index = (req, res) => {
  const query = querystring.stringify(req.query);
  fetch("https://fakestoreapi.com/products?" + query)
    .then((res) => res.json())

    .then((data) => res.render("products", { data }));
};
//Ej: http://localhost:3000/productos?limit=2&sort=desc
const searchId = (req, res) => {
  fetch("https://fakestoreapi.com/products/" + req.params.id)
    .then((res) => res.json())
    .then((producto) => res.send(producto));
};
module.exports = {
  index,
  searchId,
};
