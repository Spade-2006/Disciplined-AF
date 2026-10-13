const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const authorization = req.headers.authorization;
  const match = authorization?.match(/^Bearer\s+(\S+)$/i);

  if (!match) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const payload = jwt.verify(match[1], process.env.JWT_SECRET);
    if (!payload?.userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    req.userId = payload.userId;
    return next();
  } catch {
    return res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports = authMiddleware;