'use strict';

var app      = require('../../app');
var Bluebird = require('bluebird');
var expect   = require('expect.js');
var request  = require('supertest');

describe('user creation page', () => {
  before(() => {
      return require('../../models').sequelize.sync();
  });
  
  beforeEach(() => {
    this.models = require('../../models');

    return Bluebird.all([
      this.models.User.destroy({ truncate: true })
    ]);
  });

  it('loads correctly', (done) => {
    request(app).get('/').expect(200, done);
  });

  it('lists a user if there is one', (done) => {
    this.models.User.create({ username: 'johndoe' }).then(() => {
      request(app).get('/').expect(/johndoe/, done);
    })
  });
});
