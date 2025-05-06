const querystring = require("querystring");
const { search } = require("../routes/products.router");
const index = (req, res) => {
  const query = querystring.stringify(req.query);
  fetch("https://fakestoreapi.com/products?" + query)
    .then((res) => res.json())
    .then((producto) => res.send(producto));
};

const searchId = (req, res) => {
  fetch("https://fakestoreapi.com/products/" + req.params.id)
    .then((res) => res.json())
    .then((producto) => res.send(producto));
};
module.exports = {
  index,
  searchId,
};
