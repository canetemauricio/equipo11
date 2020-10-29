var express = require('express');
const mainController = require('../controllers/mainController');
var router = express.Router();

router.get('', mainController.home)
router.get('/creditos', mainController.about)
router.get('/cart', mainController.cart)





module.exports = router;