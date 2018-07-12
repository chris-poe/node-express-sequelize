'use strict';

var expect = require('expect.js');

describe('models/index', () => {
  it('returns the user model', () => {
    var models = require('../../models');
    expect(models.User).to.be.ok();
  });
});
