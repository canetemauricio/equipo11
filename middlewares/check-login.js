const { check, validationResult, body } = require("express-validator");

checkLogin = {
  formHandler: function (req, res, next) {  
  [check('password').isLength({ min: 6 }), check('email').isEmail()]
  next()
  }
}

module.exports = checkLogin