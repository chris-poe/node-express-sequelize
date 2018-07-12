var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.get('/', (req, res) => {
  models.User.findAll().then((users) => {
    res.send(users);
  });
});

router.post('/create', (req, res) => {
  models.User.create({
    username: req.body.username
  }).then(() => {
    return res.json({
      "message": "User created"
    });
  });
});

router.get('/:user_id', (req, res) => {
  models.User.findById(req.params.user_id).then((user) => {
    res.send(user);
  });
});

router.delete('/:user_id', (req, res) => {
  models.User.destroy({
    where: {
      id: req.params.user_id
    }
  }).then(() => {
    return res.json({
      "message": "User deleted"
    });
  });
});

module.exports = router;
