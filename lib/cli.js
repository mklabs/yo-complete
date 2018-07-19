const opts = require('140-opts')(process.argv.slice(2));
// argv are actual commands, not flags
const argv = opts._.filter(args => !/^--/.test(args));

console.log('opts', opts);
console.log('argv', argv);

// Exported stuff
const cli = module.exports = () => `Hello World, I'm a cli module`;
