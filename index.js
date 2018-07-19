const cli = require('./lib/cli');
const debug = require('debug')('yo-complete:index');

module.exports = (opts = { _: [] }) => {
  debug('Init CLI with', opts);
  return cli(opts);
};
