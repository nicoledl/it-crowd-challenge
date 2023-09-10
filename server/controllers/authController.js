const User = require("../database/models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function loginUser(req, res) {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ where: { username } });

    if (!user) {
      return res.status(401).json({ error: "Credenciales incorrectas" });
    }

    // Verify password using bcrypt
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const plainPassword = password;
    const passwordMatch = await bcrypt.compare(plainPassword, hashedPassword);

    if (!passwordMatch) {
      return res.status(401).json({ error: "Credenciales incorrectas" });
    }

    const token = jwt.sign(
      { id: user.id, username: user.username, role: user.role },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "15s" }
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
    const existingUser = await User.findOne({ where: { username } });

    if (existingUser) {
      return res
        .status(400)
        .json({ error: "El nombre de usuario ya está en uso" });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = await User.create({
      username,
      password: hashedPassword,
      email,
      role,
    });

    const token = jwt.sign(
      { id: newUser.id, username: newUser.username, role: newUser.role },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1h" }
    );

    res.status(201).json({ token });
  } catch (error) {
    console.error("Error al registrar usuario:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
}

async function verifyToken(req, res) {
  const tokenFromBody = req.body.token; // Obtén el token del cuerpo de la solicitud

  if (!tokenFromBody) {
    return res.status(401).json({ error: "Acceso no autorizado" });
  }

  jwt.verify(tokenFromBody, process.env.JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      if (err.name === "TokenExpiredError") {
        return res.status(401).json({ error: "Token expirado" });
      } else if (err.name === "JsonWebTokenError") {
        return res.status(401).json({ error: "Token no válido" });
      } else {
        return res
          .status(401)
          .json({ error: "Error en la verificación del token" });
      }
    }

    // El token es válido
    return res.status(200).json({ message: "Token válido" });
  });
}

module.exports = {
  loginUser,
  registerUser,
  verifyToken,
};
