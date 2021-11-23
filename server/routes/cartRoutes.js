const express = require("express");
const CartController = require("../controllers/cartController");

const router = express.Router();

router.get("/:userId", CartController.get);
router.get("/", CartController.getAll);
router.post("/add", CartController.add);
router.delete("/:id", CartController.delete);
router.patch("/:id", CartController.update);

module.exports = router;
