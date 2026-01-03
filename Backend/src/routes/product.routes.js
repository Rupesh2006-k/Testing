const express = require("express");
let productController = require("../controllers/product.controller");

const router = express.Router();

router.post("/create", productController.create);
router.get("/getall", productController.getAll);
router.delete("/delete-product/:id", productController.deleteOne);
router.put("/update/:id", productController.updateProduct);

module.exports = router;
