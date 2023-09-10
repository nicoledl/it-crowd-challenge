const express = require("express");
const productController = require("../controllers/productController");
const verifyToken = require("../middleware/auth");
const router = express.Router();

// get all products
router.get("/", productController.getAllProducts);

// get products per page
router.get("/:page", productController.getProductsPerPage);

// Applies the verifyToken middleware to the creation, modification, and deletion route
router.use(verifyToken);

// create new product (protegido)
router.post("/", productController.createProduct);

// get product by id
router.get("/:id", productController.getProductById);

// modify product (protegido)
router.put("/:id", productController.updateProduct);

// delete product (protegido)
router.delete("/:id", productController.deleteProduct);

module.exports = router;
