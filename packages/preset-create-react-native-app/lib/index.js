'use strict';

var _deepmerge = require('deepmerge');

var _deepmerge2 = _interopRequireDefault(_deepmerge);

var _reactNative = require('@pnpmfile/react-native');

var _reactNative2 = _interopRequireDefault(_reactNative);

var _expo = require('@pnpmfile/expo');

var _expo2 = _interopRequireDefault(_expo);

var _createReactNativeApp = require('@pnpmfile/create-react-native-app');

var _createReactNativeApp2 = _interopRequireDefault(_createReactNativeApp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// NOTE: To see crna packager errors you must add
//   `console.log(JSON.stringify(msg, null, 2))`
//   to `this._handlePackagerEvent` here:
//   node_modules/.registry.npmjs.org/xdl/48.0.2/node_modules/xdl/build/logs/PackagerLogsStream.js

// NOTE: To see full errors from the packager:
//   Modify `handleError` in node_modules/.registry.npmjs.org/react-native/0.52.0/node_modules/react-native/local-cli/cliEntry.js:41
//   See https://github.com/facebook/react-native/issues/18436

module.exports = _deepmerge2.default.all([_createReactNativeApp2.default, _reactNative2.default, _expo2.default]);
//# sourceMappingURL=index.js.map