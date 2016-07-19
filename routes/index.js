const path = require('path');
const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../app/index.html'))
});

module.exports = router;
