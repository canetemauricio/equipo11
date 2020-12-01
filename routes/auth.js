var express = require("express");
const authController = require("../controllers/authController");
var router = express.Router();
var checklogin = require("../middlewares/check-login");
const { check, validationResult, body } = require("express-validator");
let fs = require('fs');
const signUpMiddleware = require("../middlewares/signUpMiddleware");

router.get("/login", authController.login); //LISTO
router.post("/validate", authController.validateLogin); // LISTO
router.get("/register", authController.register); // LISTO
router.post("/registred", signUpMiddleware, authController.newUser); //LISTO

module.exports = router;
