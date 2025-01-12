const express = require("express");
const orderController = require("../controllers/orderController");

const router = express.Router();

router.get("/orders", orderController.getOrder);
router.delete("/orders", orderController.deleteOrder);

module.exports = router;
