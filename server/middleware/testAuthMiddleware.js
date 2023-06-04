// authMiddleware.js
const passport = require('../config/passport');
const jwt = require('jsonwebtoken');
const  jwtSecret  = process.env.ACCESS_TOKEN_SECRET;

const authenticate = (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (err, user) => {
    if (err) {
      return res.status(500).json({ message: 'Internal server error' });
    }
    if (!user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    // Check token expiration
    const currentTime = Date.now() / 1000;
    if (user.exp < currentTime) {
      return res.status(401).json({ message: 'Token has expired' });
    }

    req.user = user;
    next();
  })(req, res, next);
};

const generateToken = (user) => {
  const payload = { id: user._id };

  // Set token expiration to 1 hour
  const token = jwt.sign(payload, jwtSecret, { expiresIn: '1h' });

  return token;
};


module.exports = { authenticate, generateToken };
