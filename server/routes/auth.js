const express = require('express');
const passport = require('passport');

const { Admin } = require('../../database');
const { auth } = require('../middleware');

const router = express.Router();

router.post('/create', auth.optional, (req, res) => {
  const {
    body: { admin }
  } = req;

  if (!admin.email) {
    return res.status(422).json({
      errors: {
        email: 'is required'
      }
    });
  }

  if (!admin.password) {
    return res.status(422).json({
      errors: {
        password: 'is required'
      }
    });
  }

  const finalUser = new Admin({
    email: admin.email.toLowerCase(),
    password: admin.password
  });

  finalUser.setPassword(admin.password);

  return finalUser
    .save()
    .then(() => res.json({ admin: finalUser.toAuthJSON() }));
});

router.post('/login', auth.optional, (req, res, next) => {
  const {
    body: { admin }
  } = req;

  if (!admin.email) {
    return res.status(422).json({
      errors: {
        email: 'is required'
      }
    });
  }

  if (!admin.password) {
    return res.status(422).json({
      errors: {
        password: 'is required'
      }
    });
  }

  return passport.authenticate(
    'local',
    { session: false },
    (err, passportUser, info) => {
      if (err) {
        return next(err);
      }

      if (passportUser) {
        const adminUser = passportUser;
        adminUser.token = passportUser.generateJWT();

        return res.json({ admin: adminUser.toAuthJSON() });
      }

      return res.status(400).json({
        ...info,
        passportUser
      });
    }
  )(req, res, next);
});

router.get('/current', auth.required, (req, res) => {
  const { payload: { id } } = req;

  return Admin.findById(id)
    .then((user) => {
      if (!user) {
        return res.sendStatus(400);
      }

      return res.json({ admin: user.toAuthJSON() });
    });
});

module.exports = router;
