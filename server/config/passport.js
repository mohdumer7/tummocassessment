// passport.js
const passport = require('passport');
const { Strategy, ExtractJwt } = require('passport-jwt');
const {User} = require('../models/testModel');
const  jwtSecret  = process.env.ACCESS_TOKEN_SECRET;
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: "968153154109-uupr0jln1k0v7c36sfbno5bk2ar4nl3j.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "/login",
    },
    (accessToken, refreshToken, profile, done) => {
      // User authentication logic here
      // This callback function will be called after successful authentication
      // You can perform database operations or create a new user session
      // based on the user profile returned from Google
      // For example, you can find or create a user in your database and call done(null, user)
    }
  )
);

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: jwtSecret,
};

passport.use(
  new Strategy(options, async (payload, done) => {
    try {
      const user = await User.findById(payload.id);
      if (!user) {
        return done(null, false);
      }
      return done(null, user);
    } catch (err) {
      return done(err, false);
    }
  })
);

module.exports = passport;
