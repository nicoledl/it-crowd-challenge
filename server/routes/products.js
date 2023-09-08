const express = require("express");
const productController = require("../controllers/productController");
const router = express.Router();

// get all products
router.get("/", productController.getAllProducts);

// create new product
router.post("/", productController.createProduct);

// get product by id
router.get("/:id", productController.getProductById);

// modify product
router.patch("/:id", productController.updateProduct);

// delete product
router.delete("/:id", productController.deleteProduct);

// get all by brand id
router.get("/brand-id/:id", productController.getAllByBrand);

module.exports = router;
