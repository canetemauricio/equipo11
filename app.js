const express = require("express");
const app = express();
const path = require("path");

app.get("/", function (req, res) {
  let file = path.resolve("./public/vistas/index.html");
  res.sendFile(file);
});

app.get("/producto", function (req, res) {
  let file = path.resolve("./public/vistas/producto.html");
  res.sendFile(file);
});

app.get("/carrito", function (req, res) {
  let file = path.resolve("./public/vistas/carrito.html");
  res.sendFile(file);
});

app.get("/registro", function (req, res) {
  let file = path.resolve("./public/vistas/registro.html");
  res.sendFile(file);
});

app.get("/login", function (req, res) {
  let file = path.resolve("./public/vistas/login.html");
  res.sendFile(file);
});

app.get("*", function (req, res) {
  if (req.url.includes(".")) {
    let file = path.resolve("public" + req.url);
    return res.sendFile(file);
  }
});
