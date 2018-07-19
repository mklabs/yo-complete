const yoComplete = require('..');
const assert     = require('assert');

describe('Simple test', () => {
  it('Returns the name of the package (for now)', () => {
    assert.equal(yoComplete(), 'yo-complete');
  });
});
