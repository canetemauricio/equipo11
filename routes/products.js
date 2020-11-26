var express = require('express');
const productController = require('../controllers/productController');
var router = express.Router();
var check_admin = require("../middlewares/check-admin")


router.get('/', productController.list)

router.get('/create', check_admin, productController.create) // con middelware para controlar que el user sea administrador

router.get('/search', productController.search)

router.get('/:id', productController.show)

router.get('/:id/edit', productController.edit)
router.put('/:id/refresh', productController.refresh)
router.post('/create',productController.save)
router.delete('/:id/delete', productController.delete)










module.exports = router;