#!/usr/bin/env bash

echo Compiling: $(pwd)

rimraf lib
# We ignore `lib` because we compile from the project root.
BABEL_CLI=$(dirname $0)/../node_modules/.bin/babel

# a.
# NOTE: Make sure to use comma with `--ignore`.
#   https://stackoverflow.com/a/35748852/130910
BABEL_ENV=cjs $BABEL_CLI . --out-dir lib -s --ignore=lib,node_modules --watch

# b.
#BABEL_ENV=cjs $BABEL_CLI *.js -d lib -s --ignore=lib
