require("dotenv").config();
const express = require("express");
const app = express();
//Routes Ej principal la llevé a src/routes/main.router.js, luego la llamo y la uso
const mainRouter = require("./src/routes/main.router");
app.use(mainRouter);
//prefijo:'/productos' simplifica las rutas
app.use("/productos", require("./src/routes/products.router"));

const PORT = process.env.PORT || 3001;
//server y usos

app.listen(PORT, () => {
  console.log(`Server run on http://localhost:${PORT}`);
});
