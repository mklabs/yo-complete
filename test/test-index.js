const yoComplete = require('..');
const assert     = require('assert');

describe('Simple test', () => {
  it('Returns the name of the package', () => {
    assert.equal(yoComplete(), 'yo-complete');
  });

  it('Returns completion stuff', () => {
    const opts = { _: ['completion'] };
    assert.equal(yoComplete(opts), 'do completion, trigger tabtab.install() here');
  });
});
