// routes/authRoutes.js
const express = require("express");
const authController = require("../controllers/authController");

const router = express.Router();

// Ruta para registrar un nuevo usuario
router.post("/register", authController.registerUser);

// Ruta para iniciar sesión y generar un token JWT
router.post("/login", authController.loginUser);

module.exports = router;