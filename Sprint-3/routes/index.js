var express = require("express");
var router = express.Router();
const mainController = require("../controllers/mainController");

router.get("", mainController.home);

router.get("/cart", mainController.cart);

router.get("/listing", mainController.listing);

module.exports = router;
