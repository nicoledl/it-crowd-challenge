const express = require("express");
const productController = require("../controllers/productController");
const router = express.Router();

// get all products
router.get("/", productController.getAllProducts);

// get products per page
router.get("/:page", productController.getProductsPerPage);

// create new product
router.post("/", productController.createProduct);

// get product by id
router.get("/:id", productController.getProductById);

// modify product
router.put("/:id", productController.updateProduct);

// delete product
router.delete("/:id", productController.deleteProduct);



module.exports = router;
