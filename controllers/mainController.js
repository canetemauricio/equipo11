const { validationResult } = require("express-validator");
const fs = require("fs");
const { RequestHeaderFieldsTooLarge } = require("http-errors");
const { title } = require("process");
let products = require("../data/products.json");
let db = require("../database/models");

const {
  product,
  category,
  brand,
  gender,
  Sequelize,
} = require("../database/models");

const Op = Sequelize.Op;

module.exports = {
  home: function (req, res, next) {
    db.product.findAll().then(function (product) {
      res.render("./main/index", {
        title: "MAG - CADA PRENDA TIENE SU HISTORIA",
        product: product,
      });
    });
  },
  //   FUNCIONA - incorpore checkIP de Middleware

  async search(req, res) {
    let products = await product.findAll({
      where: {
        name: {
          [Op.substring]: req.query.search,
        },
      },
    });

    return res.render("./main/results", {
      title: "MAG - Busqueda",
      product: products.sort(() => Math.random() - 0.5),
      search: req.query.search,
    });
  },

  about: function (req, res) {
    res.send("Equipo 11");
  },
  listing: function (req, res) {
    res.render("./products/list", { products: products });
  },
  cart: function (req, res) {
    res.render("./main/cart", { title: " CARRITO - MAG" });
  },
};
