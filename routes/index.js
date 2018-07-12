var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.get('/users', function(req, res) {
  models.User.findAll().then(function(users) {
    res.send(users);
  });
});

module.exports = router;
