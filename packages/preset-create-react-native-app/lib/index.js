'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (pkg) {
  (0, _pnpmfileReadPackageJson2.default)(_def2.default)(pkg);
  (0, _reactNative2.default)(pkg);
  (0, _expo2.default)(pkg);
};

var _pnpmfileReadPackageJson = require('pnpmfile-read-package-json');

var _pnpmfileReadPackageJson2 = _interopRequireDefault(_pnpmfileReadPackageJson);

var _reactNative = require('@pnpmfile/react-native');

var _reactNative2 = _interopRequireDefault(_reactNative);

var _expo = require('@pnpmfile/expo');

var _expo2 = _interopRequireDefault(_expo);

var _def = require('./def');

var _def2 = _interopRequireDefault(_def);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=index.js.map