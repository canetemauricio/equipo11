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
const validator = require("../middlewares/validator");
const guestMiddleware = require('../middlewares/guest');

router.get("/login", authController.login);
router.post("/login", guestMiddleware, validator.login, authController.validateLogin);


router.get("/register", authController.register);
router.post("/register",  upload.any(),signUpMiddleware, authController.store);


router.post("/logout", authController.logout);

module.exports = router;
