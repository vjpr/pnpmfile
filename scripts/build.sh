#!/usr/bin/env bash

rimraf lib
# We ignore `lib` because we compile from the project root.
BABEL_CLI=$(dirname $0)/../node_modules/.bin/babel

# a.
BABEL_ENV=cjs $BABEL_CLI . -d lib -s --ignore=lib --ignore=node_modules

# b.
#BABEL_ENV=cjs $BABEL_CLI *.js -d lib -s --ignore=lib
