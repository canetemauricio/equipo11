const { check, validationResult, body } = require("express-validator");

module.exports = {
  formHandler: function (req, res, next) {  
  [check('password').isLength({ min: 6 }), check('email').isEmail()]
  next()
  }
}