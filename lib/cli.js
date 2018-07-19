const debug = require('debug')('yo-complete:cli');

// Exported stuff
const cli = module.exports = (opts) => {
  // argv are actual commands, not flags
  const argv = opts._.filter((args, index, arr) => !/^--/.test(args) && !/^--/.test(arr[index -1]));

  debug('opts', opts);
  debug('argv', argv);

  if (argv[0] === 'completion') {
    debug('do completion stuff, have to trigger tabtab install');
    return `do completion, trigger tabtab.install() here`;
  }

  return `yo-complete`;
};

