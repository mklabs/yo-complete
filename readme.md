# yo-complete

[![Build Status](https://travis-ci.org/mklabs/yo-complete.svg?branch=master)](https://travis-ci.org/mklabs/yo-complete)
[![Coverage Status](https://coveralls.io/repos/github/mklabs/yo-complete/badge.svg?branch=master)](https://coveralls.io/github/mklabs/yo-complete?branch=master)

This package is a work in progress package to add completion for Yeoman as a
separate repository.

It'll help in figuring out the best way to integrate with Yeoman.

## Installation

    npm install --save mklabs/yo-complete#master --global

Then, you'll need to run

    yo-complete completion

It'll ask for your approval to add the necessary lines to either `~/.bashrc`,
`~/.zshrc` or `~/.config/fish/config`

## Note

This is a work in progress package, and will remain on github (no npm publish).
It serve as a playground to develop the `3.0.0` version of tabtab.

## Tests

With the repo cloned, run the following:

    npm install
    npm test

    # without nyc
    npm run mocha

To see debugging statements, you'll need to run this instead:

    DEBUG='yo-complete*' ./node_modules/.bin/mocha

*Note: babel is used only in tests to support async/await syntax along with [inquirer-test](https://github.com/ewnd9/inquirer-test)*

## Linking

    npm link

To add the `yo-complete` binary available system-wide. Debugging statements are
enabled by default unless there is already a `DEBUG` environment variable.
