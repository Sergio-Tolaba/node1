require("dotenv").config();
const express = require("express");
const app = express();
//Rutes
app.get("/", (req, res) => {
  res.send("Hola Mundo!");
});
//Config
const PORT = process.env.PORT || 3001;
//server
app.listen(PORT, () => {
  console.log(`Server run on http://localhost:${PORT}`);
});
