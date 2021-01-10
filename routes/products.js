var express = require('express');
const productController = require('../controllers/productController');
var router = express.Router();
var check_admin = require("../middlewares/check-admin")


router.get('/', productController.list)

router.get('/create', check_admin, productController.create) // con middelware para controlar que el user sea administrador

router.get('/search', productController.search)

router.get('/:id', productController.detail)

router.get('/:id/edit', productController.edit)
router.post('/:id/edit', productController.refresh)


router.post('/create',productController.save)
router.post('/:id/delete', productController.delete)










module.exports = router;