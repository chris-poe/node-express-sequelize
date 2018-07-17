'use strict';

const app      = require('../../app');
const Bluebird = require('bluebird');
const expect   = require('expect.js');
const request  = require('supertest');

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
