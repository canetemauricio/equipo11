var express = require('express');
const mainController = require('../controllers/mainController');
var router = express.Router();
var checkIP = require("../middlewares/check-ip")

router.get('', checkIP, mainController.home)  // incorpore checkIP del Middleware para la pagina Index
router.get('/creditos', mainController.about)
router.get('/cart', mainController.cart)





module.exports = router;