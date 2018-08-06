'use strict';

const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING
  });

  User.hook('beforeCreate', (User, options) => {
  	bcrypt.hash(User.password, 10, (err, hash) => {
		  return User.update({
		    password: hash
		  });
		});
	});

  return User;
};
