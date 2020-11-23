var express = require("express");
const authController = require("../controllers/authController");
var router = express.Router();
var checklogin = require("../middlewares/check-login");
const { check, validationResult, body } = require("express-validator");

router.get("/login", authController.login); //LISTO
router.post("/validate", checklogin.formHandler, authController.validateLogin); // LISTO
router.get("/register", authController.register); // LISTO
router.post("/registred", checklogin.formHandler, authController.newUser); //LISTO

module.exports = router;
