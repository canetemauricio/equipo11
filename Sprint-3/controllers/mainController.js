const products = require("../data/products.json");

module.exports = {
  home: function (req, res) {
    res.render("./main/index");
  },

  cart: function (req, res) {
    res.render("./main/cart");
  },

  listing: function (req, res) {
    res.render("./main/listing", { products: products });
  },
};
