'use strict';

const expect = require('expect.js');

describe('models/index', () => {
  it('returns the user model', () => {
    const models = require('../../models');
    expect(models.User).to.be.ok();
  });
});
