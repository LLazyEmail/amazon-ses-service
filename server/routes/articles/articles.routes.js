const express = require('express');
const router = express.Router();
const articles = require('./articles');

router.get('/articles', (req, res) => {
  res.send({
    articles
  });
})

module.exports = router;