const mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const urls = require('../app-secrets/urls');

const db = mongoose.connection;

// eslint-disable-next-line no-console
db.on('error', console.error.bind(console, 'Connection error: '));
db.once('open', () => {
  // eslint-disable-next-line no-console
  console.log('Successfully connected to MongoDB.');
});

mongoose.Promise = global.Promise;
mongoose.connect(
  urls.database,
  { useNewUrlParser: true }
);
mongoose.set('debug', true);

const BlogSchema = new mongoose.Schema({
  date: String,
  title: String,
  coverImgUrl: String,
  markdownTexts: String
});

const PortfolioSchema = new mongoose.Schema({
  date: String,
  order: Number,
  title: String,
  coverImgUrl: String,
  markdownTexts: String
});

const adminSchema = new mongoose.Schema({
  email: String,
  hash: String,
  salt: String,
});

adminSchema.methods.setPassword = function setPassword(password) {
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
};

adminSchema.methods.validatePassword = function validatePassword(password) {
  const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
  return this.hash === hash;
};

adminSchema.methods.generateJWT = function generateJWT() {
  const today = new Date();
  const expirationDate = new Date(today);
  expirationDate.setDate(today.getDate() + 60);

  return jwt.sign({
    email: this.email,
    id: this._id,
    exp: parseInt(expirationDate.getTime() / 1000, 10),
  }, 'secret');
};

adminSchema.methods.toAuthJSON = function toAuthJSON() {
  return {
    _id: this._id,
    email: this.email,
    token: this.generateJWT(),
  };
};

module.exports.Blog = mongoose.model('Blog', BlogSchema);
module.exports.Portfolio = mongoose.model('Portfolio', PortfolioSchema);
module.exports.Admin = mongoose.model('Admin', adminSchema);
