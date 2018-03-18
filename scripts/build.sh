#!/usr/bin/env bash

rimraf lib
# We ignore `lib` because we compile from the project root.
BABEL_CLI=$(dirname $0)/../node_modules/.bin/babel
BABEL_ENV=cjs $BABEL_CLI *.js -d lib -s --ignore lib
