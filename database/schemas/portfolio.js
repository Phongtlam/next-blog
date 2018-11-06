const mongoose = require('../mongoose');

const portfolioSchema = new mongoose.Schema({
  date: String,
  order: Number,
  title: String,
  coverImgUrl: String,
  markdownTexts: String
});

module.exports = mongoose.model('Portfolio', portfolioSchema);
