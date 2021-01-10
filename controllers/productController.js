const fs = require("fs");
const { RequestHeaderFieldsTooLarge } = require("http-errors");
const { title } = require("process");
let products = require("../data/products.json");
let db = require("../database/models");

module.exports = {
  // list: function (req, res) {
  //   res.render("./products/list", { title: "PRODUCTS - MAG", products });
  // }, //   FUNCIONA
  list: function (req, res) {
    db.product.findAll()
      .then(function (product) {
        res.render("./products/list", { title: "PRODUCTS - MAG", product:product });
    });
  },
  // detail: function (req, res) {
  //   let productResult = products.find(function (products) {
  //     return products.id == req.params.id;
  //   });

  //   if (productResult) {
  //     return res.render("./products/detail", {
  //       title: productResult.detalle,
  //       productResult,
  //     });
  //   }
  // }, //  FUNCIONA
  detail: function (req, res) {
    db.product.findByPk(req.params.id, {
      include: [{association: "variant"}]
    })
      .then(function(product) {
        res.render("./products/detail", {product:product})
      })    
  },
  search: function (req, res) {
    let userSearch = req.query.producto.toLowerCase();
    //let upperFirst = userSearch.charAt(0).toUpperCase() + userSearch.slice(1).toLowerCase()
    //let lowerSecond = userSearch.toLowerCase()
    let results = products.filter(function (product) {
      return product.detalle.toLowerCase().includes(userSearch);
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
      detalle: req.body.detalle,
      precio: req.body.precio,
    });

    let productsJSON = JSON.stringify(productsList);
    fs.writeFileSync("./data/products.json", productsJSON);

    res.redirect("/products");
  }, //   FUNCIONA
  // edit: function (req, res) {
  //   let productId = req.params.id;
  //   let editing = products[productId - 1];
  //   res.render("./products/edit", { title: "EDITING PRODUCT - MAG", editing });
  // },
  edit: function (req, res) {
    let pedidoProducto = db.product.findByPk(req.params.id);
    let pedidoVariant = db.variant.findAll();

    Promise.all([pedidoProducto, pedidoVariant])
      .then(function([product, variant]) {
        res.render("./products/edit", { title: "EDITING PRODUCT - MAG", product:product, variant:variant })
      })
  },
  // refresh: function (req, res) {
  //   let productEdited = {
  //     id: req.body.id,
  //     detalle: req.body.detalle,
  //     precio: req.body.precio,
  //   };
  //   res.send(productEdited);
  // }, //   FUNCIONA
  refresh: function(req, res) {
    db.product.update({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price
    }, {
      where: {
        id: req.params.id
      }
    });
    res.redirect("/products/" + req.params.id)
  }, 
  // delete: function (req, res) {
  //   heroesFile = fs.readFileSync("./data/products.json", { encoding: "utf-8" });

  //   if (heroesFile == "") {
  //     heroesList = [];
  //   } else {
  //     heroesList = JSON.parse(heroesFile);
  //   }

  //   let notdeleted = products.filter(function (product) {
  //     return product.id != req.params.id;
  //   });

  //   let toWrite = JSON.stringify(notdeleted);
  //   fs.writeFileSync("./data/products.json", toWrite);

  //   res.redirect("/products");
  // }, //    FUNCIONA
  delete: function(req, res) {
    db.product.destroy( {
      where: {
        id: req.params.id
      }
    })
    console.log('error 1');
    res.redirect("/products");
    console.log('error 2');
  }
};
