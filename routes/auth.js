const models  = require('../models');
const express = require('express');
const passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;
const router  = express.Router();

passport.use(new LocalStrategy(
  (username, password, done) => {
    models.User.findOne({
      where: {
        username: username,
        password: password
      }
    })
    .then(user => {
      return done(null, user);
    })
    .catch(err => {
      if (err) { return done(err, false); }
    });
  }
));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

router.post('/login',
  passport.authenticate('local'), (req, res) => {
    return res.send(req.user);
  }
);

module.exports = router;
