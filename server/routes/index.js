const express = require("express");
const router = express();

const userRoutes = require("./userRoutes.js");
const cartRoutes = require("./cartRoutes.js");
const productRoutes = require("./productRoutes.js");
const authRoutes = require("./authRoutes.js");


router.use("/", authRoutes);
router.use("/user",userRoutes);
router.use("/cart", cartRoutes);
router.use("/product", productRoutes);

module.exports = router;
