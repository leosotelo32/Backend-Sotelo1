import express from "express";

const app = express();
app.use(express.urlencoded({ extended: true }));

app.get("/products", (req, res) => {
  res.send("productos");
});

app.get("/carts", (req, res) => {
  res.send("cartas");
});

app.listen(8080, () => {
  console.log("Servidor escuchando en el puerto 8080");
});
