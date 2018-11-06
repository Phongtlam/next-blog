const express = require('express');
const passport = require('passport');
const { Admin } = require('../../database');
const auth = require('../config/auth');
require('../config/passport');

const router = express.Router();

router.post('/create', auth.optional, (req, res) => {
  const {
    body: { user }
  } = req;

  if (!user.email) {
    return res.status(422).json({
      errors: {
        email: 'is required'
      }
    });
  }

  if (!user.password) {
    return res.status(422).json({
      errors: {
        password: 'is required'
      }
    });
  }

  const finalUser = new Admin(user);

  finalUser.setPassword(user.password);

  return finalUser
    .save()
    .then(() => res.json({ user: finalUser.toAuthJSON() }));
});

router.post('/login', auth.optional, (req, res, next) => {
  const {
    body: { user }
  } = req;

  if (!user.email) {
    return res.status(422).json({
      errors: {
        email: 'is required'
      }
    });
  }

  if (!user.password) {
    return res.status(422).json({
      errors: {
        password: 'is required'
      }
    });
  }

  return passport.authenticate(
    'local',
    { session: false },
    (err, passportUser) => {
      if (err) {
        return next(err);
      }

      if (passportUser) {
        const adminUser = passportUser;
        adminUser.token = passportUser.generateJWT();

        return res.json({ user: adminUser.toAuthJSON() });
      }

      return res.status(400).info;
    }
  )(req, res, next);
});

module.exports = router;
