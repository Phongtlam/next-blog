const express = require('express');
const Parser = require('rss-parser');

const parser = new Parser();

const router = express.Router();

router.get('/all', (req, res) => {
  parser.parseURL('https://medium.com/feed/@phongtlam', (error, feed) => {
    if (error) {
      return res.status(200).json({ error });
    }
    return res.status(200).json({
      blogData: feed
    });
  });
});

module.exports = router;
