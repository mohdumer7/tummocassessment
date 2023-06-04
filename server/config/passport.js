// passport.js
const passport = require('passport');
const { Strategy, ExtractJwt } = require('passport-jwt');
const {User} = require('../models/testModel');
const  jwtSecret  = process.env.ACCESS_TOKEN_SECRET;
const GoogleStrategy = require('passport-google-oauth20').Strategy;

      passport.use(
        new GoogleStrategy(
          {
            clientID: "968153154109-uupr0jln1k0v7c36sfbno5bk2ar4nl3j.apps.googleusercontent.com",
            clientSecret: "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",
            callbackURL: '/auth/google/callback',
          },
          (accessToken, refreshToken, profile, done) => {
            // Verify user profile and perform necessary actions
            // e.g., find or create a user in the database
            // and call the 'done' callback with the user object
            done(null, profile);
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
