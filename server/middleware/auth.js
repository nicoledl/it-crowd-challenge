const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
  const token = req.headers.authorization.split(" ")[1];
  if (!token) {
    return res.status(401).json({ error: "Acceso no autorizado" });
  }
  
  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      if (err.name === "TokenExpiredError") {
        console.log(token);
        return res.status(401).json({ error: "Expired token" });
      } else if (err.name === "JsonWebTokenError") {
        return res.status(404).json({ error: "Invalid token" });
      } else {
        return res.status(401).json({ error: "Token verification failed." });
      }
    }
    
    req.user = decoded;
    next();
  });
}

module.exports = verifyToken;
