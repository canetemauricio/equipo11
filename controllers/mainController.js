var checkIP = require("../middlewares/check-ip")

module.exports = {
  home: function (req, res, next) {
    res.render("./main/index", {
      title: "MAG - CADA PRENDA TIENE SU HISTORIA",
    });
  }, //   FUNCIONA - incorpore checkIP de Middleware
  
  about: function (req, res) {
    res.send("Equipo 11"); //FUNCIONA
  },
  listing: function (req, res) {
    res.render("./products/list", { products: products });
  },
  //   FUNCIONA
  cart: function (req, res) {
    res.render("./main/cart", { title: " CARRITO - MAG" });
  }, //    FUNCIONA
};
