const express = require("express");
const userController = require("../controllers/userController");
const authMiddleWare = require("../component/authMiddleWare");
const router = express.Router();

router.get("/users", authMiddleWare, userController.createUser);
router.delete("/users", authMiddleWare, userController.deleteUser);
router.put("/users", authMiddleWare, userController.updateUser);

module.exports = router;
