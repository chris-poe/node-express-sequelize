'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Auth', {
      username: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      }
    });
  },
  
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Auth');
  }
};
