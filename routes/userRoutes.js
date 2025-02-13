const express = require("express");
const userController = require("../controllers/userController");
const authMiddleWare = require("../component/authMiddleWare");
const validationMiddleWare = require("../component/validatorMiddleWare");
const { CreateUserSchema } = require("../validations/userValidation");


const router = express.Router();
router.get("/users",userController.getUsers)
router.post("/users",validationMiddleWare(CreateUserSchema), userController.createUser);
router.delete("/users", authMiddleWare, userController.deleteUser);
router.put("/users", authMiddleWare, userController.updateUser); 
module.exports = router;
