import update from 'pnpmfile-read-package-json'
import def from './def'

// NOTE: To see crna packager errors you must add `console.log(JSON.stringify(msg, null, 2))` to `this._handlePackagerEvent` here:
//   photo-booth-ios-crna/node_modules/.registry.npmjs.org/xdl/48.0.2/node_modules/xdl/build/logs/PackagerLogsStream.js

export default function(pkg) {
  update(def)(pkg)
}

//function createReactNativeApp(pkg) {
//  const pjson = require('./package.json')
//  if (pkg.name === pjson.name) {
//    Object.assign(pkg.dependencies, {
//      'babel-preset-expo': '^4',
//      'babel-plugin-transform-react-jsx-source': '6',
//    })
//  }
//}
