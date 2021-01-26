var express = require('express');
const productController = require('../controllers/productController');
var router = express.Router();
var check_admin = require("../middlewares/check-admin")
var authMiddleware = require('../middlewares/checkAuth')
const validator = require("../middlewares/validator");


router.get('/', productController.list)

router.get('/create', authMiddleware, check_admin, productController.create) // con middelware para controlar que el user sea administrador
router.post('/', authMiddleware, validator.createProduct, check_admin, productController.save)


router.get('/search', productController.search)

router.get('/:id', productController.detail)

router.get('/:id/edit', productController.edit)
router.post('/:id/edit', productController.refresh)


router.post('/:id/delete', productController.delete)










module.exports = router;