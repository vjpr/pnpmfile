#!/usr/bin/env babel-node

import fs from 'fs'
import glob from 'globby'
import path, {join} from 'path'
import {escape, unescape} from '../escape-package-name'
import _ from 'lodash'

const dest = join(process.cwd(), 'packages/pnpmfile-check/list.generated.json')

console.log('Compiling supported packages to', dest)

const json = {
  test: '1',
}

const packages = glob.sync('packages/*', {
  onlyDirectories: true,
  absolute: true,
  ignore: [
    'packages/pnpmfile-check',
    'packages/pnpmfile-read-package-json',
    '**/node_modules/**',
    // TODO(vjpr): Starts with `preset-`.
  ],
})
console.log({packages})

const out = packages.map(p => {
  const name = path.basename(p)
  const versionArray = require(p).default
  if (!_.isArray(versionArray)) {
    console.error('Needs to be array in package', name)
    return
  }
  const versions = (versionArray || []).map(p => p.versionRange)
  return {name: unescape(name), versions}
})

console.log(out)
fs.writeFileSync(dest, JSON.stringify(out, null, 2))
