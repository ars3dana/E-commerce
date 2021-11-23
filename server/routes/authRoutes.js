const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const UserController = require("../controllers/userController");


router.post(
  "/registration",
  [
    body('email', 'Введите корректный email').normalizeEmail().isEmail(),
    body('password', 'Введите пароль').exists().isLength({ min: 3, max: 25 }),
  ],
  UserController.registration);
  router.post('/login', 
  body('email', 'Введите корректный email').normalizeEmail().isEmail(),
  body('password', 'Введите пароль').exists(),
UserController.login);


module.exports = router;
