const User = require("../database/models/User"); // Importa el modelo de usuario
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secretKey = require("../config/authConfig").secretKey;

async function loginUser(req, res) {
  const { username, password } = req.body;
  try {
    // Busca al usuario por nombre de usuario en la base de datos
    const user = await User.findOne({ where: { username } });

    if (!user) {
      return res.status(401).json({ error: "Credenciales incorrectas" });
    }

    // Verifica la contraseña utilizando bcrypt
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Comparación de contraseñas (esto se hace al iniciar sesión)
    const plainPassword = password; // La contraseña que el usuario proporciona en el formulario
    const passwordMatch = await bcrypt.compare(plainPassword, hashedPassword);

    if (!passwordMatch) {
      return res.status(401).json({ error: "Credenciales incorrectas" });
    }

    // Genera un token JWT para el usuario autenticado
    const token = jwt.sign(
      { id: user.id, username: user.username, role: user.role },
      secretKey,
      { expiresIn: "1h" }
    );

    res.json({ token });
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
}

async function registerUser(req, res) {
  const { username, password, email, role } = req.body;

  try {
    // Verifica si el usuario ya existe en la base de datos
    const existingUser = await User.findOne({ where: { username } });

    if (existingUser) {
      return res
        .status(400)
        .json({ error: "El nombre de usuario ya está en uso" });
    }

    // Genera un hash de contraseña con sal
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Crea un nuevo usuario con el hash de contraseña
    const newUser = await User.create({
      username,
      password: hashedPassword,
      email,
      role,
    });

    // Genera un token JWT para el nuevo usuario
    const token = jwt.sign(
      { id: newUser.id, username: newUser.username, role: newUser.role },
      secretKey,
      { expiresIn: "1h" }
    );

    res.status(201).json({ token });
  } catch (error) {
    console.error("Error al registrar usuario:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
}

module.exports = {
  loginUser,
  registerUser,
};
