const express = require("express");
const brandController = require("../controllers/brandController");
const router = express.Router();

// get all brands
router.get("/", brandController.getAllBrands);

// get brands per page
router.get("/:page", brandController.getBrandsPerPage);

// create new brand
router.post("/", brandController.createBrand);

// modify brand
router.put("/:id", brandController.updateBrand);

// delete brand
router.delete("/:id", brandController.deleteBrand);

module.exports = router;
