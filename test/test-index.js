const yoComplete = require('..');
const assert     = require('assert');
const opts = require('140-opts')(process.argv.slice(2));

describe('Simple test', () => {
  it('Returns the name of the package', () => {
    assert.equal(yoComplete(), 'yo-complete');
  });

  it('Returns completion stuff', () => {
    const opts = { _: ['completion'] };
    assert.equal(yoComplete(opts), 'do completion, trigger tabtab.install() here');
  });

  it('Returns help output', () => {
    const opts = { _: ['--help'], help: true };
    assert.equal(yoComplete(opts), yoComplete.help);
  });

  it('Returns help output even with completion arguments', () => {
    const opts = { _: ['completion', '--help'], help: true };
    assert.equal(yoComplete(opts), yoComplete.help);
  });
});
