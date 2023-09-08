const express = require("express");
const searchController = require("../controllers/searchController");
const router = express.Router();

// get all by search
router.get("/", searchController.searchProducts);

module.exports = router;
