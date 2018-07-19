const debug  = require('debug')('yo-complete:cli');
const tabtab = require('tabtab');
const help   = require('./help');

// Exported stuff
const cli = module.exports = (opts) => {
  // argv are actual commands, not flags
  const argv = opts._.filter((args, index, arr) => !/^--/.test(args) && !/^--/.test(arr[index -1]));

  debug('opts', opts);
  debug('argv', argv);

  // Help output
  if (opts.help) {
    debug('Trigger help output');
    console.log(help);
    return help;
  }

  // Commands

  // yo-complete completion
  if (argv[0] === 'completion') {
    debug('do completion stuff, have to trigger tabtab install');
    return `do completion, trigger tabtab.install() here`;

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

  return `yo-complete`;
};
