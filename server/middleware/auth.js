const jwt = require("jsonwebtoken");
const secretKey = require("../config/authConfig").secretKey;

function verifyToken(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: "Acceso no autorizado" });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: "Token no válido" });
    }

    // El token es válido, puedes acceder a la información del usuario en decoded
    req.user = decoded;
    next();
  });
}

module.exports = verifyToken;
