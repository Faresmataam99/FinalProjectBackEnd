const express = require("express");
const authController = require("../controllers/authController");
const authMiddleWare = require("../component/authMiddleWare");
const validationMiddleWare = require('../component/validatorMiddleWare')
const {loginSchema}=require('../validations/authValidation')
const {CreateUserSchema}=require('../validations/userValidation')

const router = express.Router();

router.post("/login",validationMiddleWare(loginSchema), authController.login);
router.post("/register",validationMiddleWare(CreateUserSchema), authController.register);
router.get("/account",authMiddleWare,authController.account)

module.exports = router;
 