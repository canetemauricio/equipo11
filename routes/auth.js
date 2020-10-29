var express = require('express');
const authController = require('../controllers/authController');
var router = express.Router();


router.get('/login', authController.login)   //LISTO
router.post('/validate', authController.validateLogin) // LISTO
router.get('/register', authController.register) // LISTO
router.post('/registred', authController.newUser) //LISTO

module.exports= router