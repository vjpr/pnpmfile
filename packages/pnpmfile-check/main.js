import semver from 'semver'
import packageList from './list.generated'
import _ from 'lodash'
import {escape, unescape} from './escape-package-name'
import tryResolve from 'try-resolve'

const matches = []

export default function(pkg) {
  const {name, version} = pkg
  const match = _(packageList).find({name})
  if (!match) return
  const didMatchVersion = _(match.versions).some(range => {
    return semver.satisfies(version, range)
  })
  if (didMatchVersion) onMatchFound(pkg)
}

function onMatchFound(pkg) {
  const scopedPackage = getPnpmfileScopedName(pkg)
  console.warn(`Incompatible package found: '${pkg.name}'`)
  console.log('Trying to use:', scopedPackage)
  if (tryResolve(scopedPackage)) {
    console.log('Patching.')
    const rp = require(scopedPackage).default
    console.log('here', rp, pkg)
    //require('pnpmfile-read-package-json')(rp)(pkg)
  }
  console.warn(`Not found. Please run: pnpm i -D ${scopedPackage}`)
  matches.push(pkg)
}

function getPnpmfileScopedName(pkg) {
  return `@pnpmfile/${escape(pkg.name)}`
}

export function after() {
  if (!matches.length) return
  console.log('The following packages have issues with pnpm.')
  console.log('You must install the following packages:')
  const cmd = 'pnpm install '
  const pkgs = matches.map(m => {
    return getPnpmfileScopedName(m)
  }).join(' ')
  console.log(cmd + pkgs)
}
