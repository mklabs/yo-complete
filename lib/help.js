const pkg   = require('../package.json');

module.exports = `
  ${pkg.name} - ${pkg.version}

  Options

    --help          Show this help output
    --version       Show package version

  Commands

    completion      Run tabtab.install() to setup completion scripts in either
                    ~/.bashrc, ~/.zshrc or ~/.config/fish/config.fish
`;
