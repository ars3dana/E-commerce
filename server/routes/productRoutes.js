const express = require("express");
const ProductController = require("../controllers/productController");

const router = express.Router();

router.get("/", ProductController.getAll);
router.get("/:id", ProductController.getOne);
router.post("/create", ProductController.create);
router.delete("/:id", ProductController.delete);
router.patch("/:id", ProductController.update);

module.exports = router;
