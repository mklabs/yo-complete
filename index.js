const debug = require('debug')('yo-complete:index');
const cli   = require('./lib/cli');
const help  = require('./lib/help');

const yoComplete = module.exports = (opts = { _: [] }) => {
  debug('Init CLI with', opts);
  return cli(opts);
};

yoComplete.help = help;
