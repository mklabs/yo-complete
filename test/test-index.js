const yoComplete    = require('..');
const assert        = require('assert');
const opts          = require('140-opts');
const run           = require('inquirer-test');
const path          = require('path');
const fs            = require('fs');
const untildify     = require('untildify');
const tabtab        = require('tabtab');
// const { promisify } = require('util');
// for node 6
const { promisify } = require('es6-promisify');
const read          = promisify(require('fs').readFile);

// Path to cli to test against inquirer-test
const cliPath       = path.join(__dirname, '../bin/yo-completer');

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

  it('Triggers tabtab install on `yo-completer completion (output)`', async () => {
    const result = await run([cliPath, 'completion'], [ENTER], TIMEOUT);
    assert.ok(/\-begin\-yo\-completion/.test(result));
    return Promise.resolve();
  });

  describe('tabtab.install()', () => {
    afterEach(async () => {
      const tabtabCommands = new tabtab.Commands({
        name: 'yo',
        completer: 'yo-complete'
      });

      return tabtabCommands.uninstall();
    });

    it('Triggers tabtab install on `yo-completer completion (~/.bashrc)`', async () => {
      const result = await run([cliPath, 'completion'], [DOWN, ENTER], TIMEOUT);
      const bashrc = await read(untildify('~/.bashrc'), 'utf8');

      assert.ok(/tabtab\ssource\sfor\syo\spackage/.test(bashrc));
      return Promise.resolve();
    });
  });
});
