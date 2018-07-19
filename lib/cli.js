const debug  = require('debug')('yo-complete:cli');
const tabtab = require('tabtab');
const help   = require('./help');
const pkg    = require('../package.json');

// Exported stuff
const cli = module.exports = (opts) => {
  // argv are actual commands, not flags
  const argv = opts._.filter((args, index, arr) => !/^--/.test(args) && !/^--/.test(arr[index -1]));

  debug('opts', opts);
  debug('argv', argv);

  // Help output
  if (opts.help) {
    console.log(help);
    return help;
  }

  // Show version on --version
  if (opts.version) {
    const msg = `${pkg.version}`;
    console.log(msg);
    return msg;
  }

  // Commands

  // yo-complete completion
  if (argv[0] === 'completion') {
    debug('do completion stuff, have to trigger tabtab install');

    const tabtabCommands = new tabtab.Commands({
      name: 'yo',
      completer: 'yo-complete'
    });

    // Only run the install command on yo completion, and avoid running it when
    // triggering a completion
    if (!process.env.COMP_LINE) {
      return tabtabCommands.install();
    }

    // Avoid running completion as a generator
    return;
  }
};
