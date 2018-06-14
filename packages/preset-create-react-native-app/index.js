import merge from 'deepmerge'
import reactNative from '@pnpmfile/react-native'
import expo from '@pnpmfile/expo'
import createReactNativeApp from '@pnpmfile/create-react-native-app'

// NOTE: To see crna packager errors you must add
//   `console.log(JSON.stringify(msg, null, 2))`
//   to `this._handlePackagerEvent` here:
//   node_modules/.registry.npmjs.org/xdl/48.0.2/node_modules/xdl/build/logs/PackagerLogsStream.js

// NOTE: To see full errors from the packager:
//   Modify `handleError` in node_modules/.registry.npmjs.org/react-native/0.52.0/node_modules/react-native/local-cli/cliEntry.js:41
//   See https://github.com/facebook/react-native/issues/18436

module.exports = merge.all([createReactNativeApp, reactNative, expo])

