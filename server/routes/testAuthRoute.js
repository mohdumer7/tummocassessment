// routes.js
const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/testAuthController');
const passport = require('passport');

router.post('/register', registerUser);
router.post('/login', loginUser);

router.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

// Google Sign-In callback route
router.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    // Successful authentication, redirect or send response
    // res.redirect('/dashboard');
  }
);

  router.get('/logout',(req,res)=>{
    req.logout()
    res.redirect('http://localhost:3000/')
  })

module.exports = router;
