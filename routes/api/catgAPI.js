var express = require("express");
var router = express.Router();
var catgAPIController = require("../../controllers/api/catgController");

router.get("/", catgAPIController.list);
// router.get("/:id", catgAPIController.find);

module.exports = router;
