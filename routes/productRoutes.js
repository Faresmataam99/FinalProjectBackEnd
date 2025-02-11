const express = require("express");
const productController = require("../controllers/productController");
const multer = require("multer");
const validationMiddleware = require("../component/validatorMiddleWare");
const {createProductSchema,updateProductSchema,} = require("../validations/ProductValidation");
const validObjectMiddleware = require("../component/validObjectMiddleware");


const upload = multer({ dest: "./public/uploads" });

const router = express.Router();

router.get("/products", productController.getProducts);
router.post("/products",upload.single("image"),validationMiddleware(createProductSchema), productController.createProduct);
router.put("/products/:id",upload.single("image"),validObjectMiddleware,validationMiddleware(updateProductSchema),productController.updateProduct);
router.get("/products/:id", validObjectMiddleware, productController.getProduct);
router.delete("/products/:id",validObjectMiddleware,productController.deleteProduct);


module.exports = router;
