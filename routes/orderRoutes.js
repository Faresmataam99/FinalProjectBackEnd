const express = require("express");
const orderController = require("../controllers/orderController");
const validationMiddleWare=require('../component/validatorMiddleWare');
const { createOrderSchema } = require("../validations/ordersValidation");
const validObjectMiddleware = require("../component/validObjectMiddleware")
const authMiddleware = require('../component/authMiddleWare')
const router = express.Router();

router.get("/orders", orderController.getOrders);
router.post("/orders",validationMiddleWare(createOrderSchema),orderController.createOrder)
router.get("/order:id",authMiddleware,validObjectMiddleware,orderController.getOrder)
router.put("/orders:id",authMiddleware,validObjectMiddleware,orderController.validateOrder)
module.exports = router;

