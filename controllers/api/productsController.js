const { validationResult } = require("express-validator");
const fs = require("fs");
const { RequestHeaderFieldsTooLarge } = require("http-errors");
const { title, send } = require("process");
let db = require("../../database/models");

const { product, category, brand, gender } = require("../../database/models");

let productsAPIController = {
  list: function (req, res) {
    db.product
      .findAll({
        include: [
          { association: "gender" },
          { association: "category" },
          { association: "brand" },
        ],
      })
      .then(function (product) {
        for (let i = 0; i < product.length; i++) {
          product[i].setDataValue("endpoint", "/api/products/" + product[i].id);
          product[i].setDataValue(
            "endpoint.img",
            "/images/" + product[i].image
          );
          delete product[i].dataValues.deletedAt;
          delete product[i].dataValues.genderID;
          delete product[i].dataValues.categoriesID;
          delete product[i].dataValues.brandID;
        }
        var TotalPrice = 0;
        product.forEach((product) => {
          TotalPrice += Number(product.price);
        });
        let respuesta = {
          status: 200,
          count: product.length,
          totalPrice: TotalPrice,
          url: "/api/products",
          products: product,
        };
        res.json(respuesta);
      });
  },
  find: function (req, res) {
    db.product.findByPk(req.params.id).then(function (product) {
      delete product.dataValues.deletedAt;
      delete product.dataValues.genderID;
      delete product.dataValues.categoriesID;
      delete product.dataValues.brandID;
      res.json(product);
    });
  },
};

module.exports = productsAPIController;
