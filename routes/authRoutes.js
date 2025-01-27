const express = require("express");
const authController = require("../controllers/authController");
const authMiddleWare = require("../component/authMiddleWare");

const router = express.Router();

router.get("/login", authController.login);
router.post("/account", authMiddleWare, authController.register);


module.exports = router;
 