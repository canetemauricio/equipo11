var express = require("express");
var router = express.Router();
const usersController = require("../controllers/usersController");

// router.get("/", function (req, res, next) {
//   res.send("respond with as resource");
//   res.render("./users/index")
// });
router.get("/", usersController.profile);

module.exports = router;
