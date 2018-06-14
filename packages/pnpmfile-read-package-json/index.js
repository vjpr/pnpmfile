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

module.exports = function(entries) {
  return function(pkg, rootPkg) {
    if (!rootPkg) throw new Error(`You must pass the 'rootPkg' arg to 'pnpmfile-read-package-json'`)
    for (const [key, entry] of Object.entries(entries)) {
      let {name, version} = parsePackageName(key)
      // TODO(vjpr): '' is a valid range I think according to https://semver.npmjs.com/.
      // TODO(vjpr): '' and '*' never match pre-release versions. Should we introduce syntax to match all versions including pre-release?
      let matchAll = false
      if (version === '') matchAll = true
      if (key === '<root>') {
        //name = getRootPackageName()
        name = rootPkg
      }

      // TODO(vjpr): We need to find the best version to replace. Maybe sort by semver beforehand.
      if (name === pkg.name) {
        if (matchAll || semver.satisfies(pkg.version, version)) {
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

//function getRootPackageName() {
//  // NOTE: `process.cwd()` won't be correct when running `pnpm recursive link`.
//  //   Instead we just pass it in for now.
//  const pjson = require(join(process.cwd(), 'package.json'))
//  return pjson.name
//}

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
