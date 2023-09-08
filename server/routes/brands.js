const express = require("express");
const brandController = require("../controllers/brandController");
const router = express.Router();

// Obtener todas las marcas
router.get("/", brandController.getAllBrands);

// Crear una nueva marca
router.post("/", brandController.createBrand);

// Eliminar una marca por ID
router.delete("/:id", brandController.deleteBrand);

module.exports = router;
