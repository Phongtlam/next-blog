const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const { Admin } = require('../../database');

passport.use(
  new LocalStrategy(
    {
      usernameField: 'admin[email]',
      passwordField: 'admin[password]'
    },
    (email, password, done) => {
      Admin.findOne({ email: email.toLowerCase() })
        .then(user => {
          if (!user || !user.validatePassword(password)) {
            return done(null, false, {
              errors: { 'email or password': 'is invalid' }
            });
          }

          return done(null, user);
        })
        .catch(err => done(err));
    }
  )
);

module.exports = passport;
