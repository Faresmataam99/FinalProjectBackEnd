const express = require("express");
const productController = require("../controllers/productController");

const router = express.Router();

router.get("/products", productController.getProducts);
router.post("/products", productController.createProduct);
router.put("/product:id", productController.updateProduct);
router.get('/product:id',)
router.delete("/product:id", productController.deleteProduct);

module.exports = router;
