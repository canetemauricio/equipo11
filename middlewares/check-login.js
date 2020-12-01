const { check, validationResult, body } = require("express-validator");

module.exports = [ 
  check('password').isLength({ min: 6 }).withMessage('La contraseña debe contener al menos 6 caracteres'), 
  check('email').isEmail().withMessage('Email inválido')


]
 
  


