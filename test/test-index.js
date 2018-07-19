const yoComplete = require('..');
const assert     = require('assert');
const opts = require('140-opts');

describe('Simple test', () => {
  it('Returns help output', () => {
    const options = { _: ['--help'], help: true };
    assert.equal(yoComplete(options), yoComplete.help);

    const parsed = opts(['--help']);
    assert.equal(yoComplete(parsed), yoComplete.help);
  });

  it('Returns help output even with completion arguments', () => {
    const options = { _: ['completion', '--help'], help: true };
    assert.equal(yoComplete(options), yoComplete.help);

    const parsed = opts(['completion', '--help']);
    assert.equal(yoComplete(parsed), yoComplete.help);
  });

  it('Returns version on --version', () => {
    const options = opts(['--version']);
    assert.equal(yoComplete(options), require('../package.json').version);

    const optsWithCompletion = opts(['completion', '--version']);
    assert.equal(yoComplete(options), require('../package.json').version);
  });

  it('depends');
});
