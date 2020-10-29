const fs = require("fs");
const { RequestHeaderFieldsTooLarge } = require("http-errors");
const { title } = require("process");
let products = require("../data/products.json");

module.exports = {
  list: function (req, res) {
    res.render("./products/list", { title: "PRODUCTS - MAG", products });
  }, //   FUNCIONA
  show: function (req, res) {
    let productResult = products.find(function (products) {
      return products.id == req.params.id;
    });

    if (productResult) {
      return res.render("./products/detail", {
        title: productResult.alias,
        productResult,
      });
    }
  }, //  FUNCIONA
  search: function (req, res) {
    let userSearch = req.query.alias.toLowerCase();
    //let upperFirst = userSearch.charAt(0).toUpperCase() + userSearch.slice(1).toLowerCase()
    //let lowerSecond = userSearch.toLowerCase()
    let results = products.filter(function (product) {
      return product.alias.toLowerCase().includes(userSearch);
    });

    res.render("./products/productSearch", {
      title: "SEARCH RESULTS - MAG",
      results,
    });
  }, //   FUNCIONA
  create: function (req, res) {
    res.render("./products/create", { title: "NEW PRODUCT - MAG" });
  }, //   FUNCIONA
  save: function (req, res) {
    productsFile = fs.readFileSync("./data/products.json", {
      encoding: "utf-8",
    });

    if (productsFile == "") {
      productsList = [];
    } else {
      productsList = JSON.parse(productsFile);
    }
    productsList.push({
      id: productsList[productsList.length - 1].id + 1,
      alias: req.body.alias,
      name: req.body.name,
      powers: req.body.powers,
      review: req.body.review,
    });

    let productsJSON = JSON.stringify(productsList);
    fs.writeFileSync("./data/products.json", productsJSON);

    res.redirect("/products");
  }, //   FUNCIONA
  edit: function (req, res) {
    let productId = req.params.id;
    let editing = products[productId - 1];
    res.render("./products/edit", { title: "EDITING PRODUCT - MAG", editing });
  },
  refresh: function (req, res) {
    let productEdited = {
      id: req.body.id,
      alias: req.body.alias,
      name: req.body.name,
      powers: req.body.powers,
      review: req.body.review,
    };
    res.send(productEdited);
  }, //   FUNCIONA
  delete: function (req, res) {
    heroesFile = fs.readFileSync("./data/products.json", { encoding: "utf-8" });

    if (heroesFile == "") {
      heroesList = [];
    } else {
      heroesList = JSON.parse(heroesFile);
    }

    let notdeleted = products.filter(function (product) {
      return product.id != req.params.id;
    });

    let toWrite = JSON.stringify(notdeleted);
    fs.writeFileSync("./data/products.json", toWrite);

    res.redirect("/products");
  }, //    FUNCIONA
};
