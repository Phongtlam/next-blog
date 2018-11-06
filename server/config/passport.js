const passport = require('passport');
const LocalStrategy = require('passport-local');

const { Admin } = require('../../database');

passport.use(
  new LocalStrategy(
    {
      usernameField: 'username',
      passwordField: 'password'
    },
    (email, password, done) => {
      Admin.findOne({ email })
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
