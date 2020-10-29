var express = require('express');
const productController = require('../controllers/productController');
var router = express.Router();


router.get('/', productController.list)

router.get('/create', productController.create)

router.get('/search', productController.search)

router.get('/:id', productController.show)

router.get('/:id/edit', productController.edit)
router.put('/:id/refresh', productController.refresh)
router.post('/create',productController.save)
router.delete('/:id/delete', productController.delete)










module.exports = router;