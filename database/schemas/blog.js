const mongoose = require('../mongoose');

const blogSchema = new mongoose.Schema({
  date: String,
  title: String,
  coverImgUrl: String,
  markdownTexts: String
});

module.exports = mongoose.model('Blog', blogSchema);
