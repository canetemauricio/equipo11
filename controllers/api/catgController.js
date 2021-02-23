const { validationResult } = require("express-validator");
const fs = require("fs");
const { RequestHeaderFieldsTooLarge } = require("http-errors");
const { title, send } = require("process");
let db = require("../../database/models");

const { product, category } = require("../../database/models");

let catgAPIController = {
  list: function (req, res) {
    db.category
      .findAll({
        include: [{ association: "products" }],
      })
      .then(function (category) {
        for (let i = 0; i < category.length; i++) {
          category[i].setDataValue(
            "endpoint",
            "/api/categories" + category[i].id
          );
        }
        let respuesta = {
          meta: {
            status: 200,
            catgcount: category.length,
            url: "/api/categoriess",
          },
          data: category,
        };
        res.json(respuesta);
      });
  },
};

module.exports = catgAPIController;
