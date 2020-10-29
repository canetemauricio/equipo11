var express = require('express');
const authController = require('../controllers/authController');
var router = express.Router();


router.get('/login', authController.login)
router.post('/validate', authController.validateLogin)
router.get('/register', authController.register)
router.post('/registred', authController.newUser)



module.exports= router