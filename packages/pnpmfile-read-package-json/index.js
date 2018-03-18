import semver from 'semver'
import parsePackageName from 'parse-package-name'
import path, {join} from 'path'
import _ from 'lodash'
import Debug from 'debug'
import {diffJson} from 'diff'
import chalk from 'chalk'

const debug = Debug('pnpmfile-read-package-json')

// Using `debug`.
const shouldPrintDiff = true

export default function(entries) {
  return function(pkg) {
    for (const [key, entry] of Object.entries(entries)) {
      let {name, version} = parsePackageName(key)
      if (key === '<root>') {
        name = getRootPackageName()
      }

      // TODO(vjpr): We need to find the best version to replace. Maybe sort by semver beforehand.
      if (name === pkg.name) {
        if (semver.satisfies(pkg.version, version)) {
          const allowed = [
            'dependencies',
            'devDependencies',
            'peerDependencies',
          ]
          const originalPkg = _.cloneDeep(pkg)
          const obj = _.pick(entry, allowed)
          _.merge(pkg, obj) // Mutates!
          const before = _.pick(originalPkg, allowed)
          const after = _.pick(pkg, allowed)
          if (shouldPrintDiff) printDiff(pkg, before, after)

          // TODO(vjpr): Support callback function for custom changes.
          break
        }
      }
    }
  }
}

function getRootPackageName() {
  const pjson = require(join(process.cwd(), 'package.json'))
  return pjson.name
}

function printDiff(pkg, before, after) {
  const delta = diffJson(before, after)
  const str = delta.map(part => {
    var color = part.added ? 'green' : part.removed ? 'red' : 'grey'
    return chalk[color](part.value)
  }).join('')
  if (delta.length) {
    debug(`Modified '${pkg.name}'`)
    debug(str)
  }
}
