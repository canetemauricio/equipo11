var express = require("express");
const authController = require("../controllers/authController");
var router = express.Router();
const multer = require('multer')
let path = require('path')
var storage = multer.diskStorage({ 
    destination: function(req,file,cb){
        cb(null, __dirname + '/../public/images/users')
    } ,
    filename: function(req,file,cb){
        cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
var upload = multer({storage: storage})
var checklogin = require("../middlewares/check-login");
const { check, validationResult, body } = require("express-validator");
let fs = require('fs');
const signUpMiddleware = require("../middlewares/signUpMiddleware");

router.get("/login", authController.login); //LISTO
router.post("/validate", authController.validateLogin); // LISTO
router.get("/register", authController.register); // LISTO
router.post("/registred",  upload.any(),signUpMiddleware, authController.newUser); //LISTO
router.post("/logout", authController.logout) // LISTO

module.exports = router;
