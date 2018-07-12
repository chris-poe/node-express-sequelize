var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.get('/', (req, res) => {
  return res.status(404).end();
});

module.exports = router;
