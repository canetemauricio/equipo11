var express = require('express');
const authController = require('../controllers/authController');
var router = express.Router();


router.get('/login', authController.login)

router.get('/register', authController.register)




module.exports= router