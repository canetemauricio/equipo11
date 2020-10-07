const { red } = require("color-name");
const express = require("express");
const app = express();
const path = require("path");

app.get("/", function (req, res) {
  let file = path.resolve("public/vistas/index.html");
  res.sendFile(file);
});

app.get("*", function (req, res) {
  if (req.url.endsWith(".css")) {
    let file = path.resolve("public/styles" + req.url);
    return res.sendFile(file);
  }

  let images = ["jpg", "jpeg", "gif", "png", "svg"];
  let ext = req.url.split(".")[1];

  if (images.includes(ext)) {
    let file = path.resolve("public/images" + req.url);
    return res.sendFile(file);
  }

  res.send("Not found");
});

app.listen(3030, () => {
  console.log("MAG está escuchando en el puerto 3000");
});
