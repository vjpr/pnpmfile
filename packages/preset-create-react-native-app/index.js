import update from 'pnpmfile-read-package-json'
import reactNative from '@pnpmfile/react-native'
import expo from '@pnpmfile/expo'
import def from './def'

// NOTE: To see crna packager errors you must add `console.log(JSON.stringify(msg, null, 2))` to `this._handlePackagerEvent` here:
//   photo-booth-ios-crna/node_modules/.registry.npmjs.org/xdl/48.0.2/node_modules/xdl/build/logs/PackagerLogsStream.js

export default function(pkg) {
  update(def)(pkg)
  reactNative(pkg)
  expo(pkg)
}
