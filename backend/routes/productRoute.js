const express = require('express');
const { getAllProduct, createProduct, updateProduct, deleteProduct, getSingleProduct } = require('../controllers/productController');

const router = express.Router()



router.route("/products").get(getAllProduct)

router.route("/products/new").post(createProduct)

router.route("/products/:id").put(updateProduct)

router.route("/products/:id").delete(deleteProduct)

router.route("/products/:id").get(getSingleProduct)





module.exports = router;