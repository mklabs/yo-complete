const yoComplete    = require('..');
const assert        = require('assert');
const opts          = require('140-opts');
const run           = require('inquirer-test');
const path          = require('path');
const fs            = require('fs');
// const { promisify } = require('util');
// for node 6
const { promisify } = require('es6-promisify');
const read          = promisify(require('fs').readFile);

// Path to cli to test against inquirer-test
const cliPath       = path.join(__dirname, '../bin/yo-complete');

// inquirer-test needs a little bit more time, or yo-complete
const TIMEOUT = 1000;
const { UP, DOWN, ENTER } = run;

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

  it('Triggers tabtab install on `yo-complete completion async`', async () => {
    const result = await run([cliPath, 'completion'], [ENTER], TIMEOUT);
    assert.ok(/\-begin\-yo\-completion/.test(result));
    return Promise.resolve();
  });
});
