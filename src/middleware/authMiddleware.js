const config = require('../config/config');

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Authorization header is missing or malformed' });
  }

  const token = authHeader.split(' ')[1];

  if (token !== config.token) {
    return res.status(403).json({ message: 'Unauthorized. Invalid API token' });
  }

  next();
};

module.exports = authMiddleware;
