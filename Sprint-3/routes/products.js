var express = require('express');
const productController = require('../controllers/productController');
var router = express.Router();


router.get('/', productController.show)
router.get('/detail', productController.detail)


module.exports= router