const models  = require('../models');
const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  return res.status(404).end();
});

module.exports = router;
