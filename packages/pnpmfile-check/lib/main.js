'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (pkg) {
  const { name, version } = pkg;
  const match = (0, _lodash2.default)(_list2.default).find({ name });
  if (!match) return;
  const didMatchVersion = (0, _lodash2.default)(match.versions).some(range => {
    return _semver2.default.satisfies(version, range);
  });
  if (didMatchVersion) onMatchFound(pkg);
};

exports.after = after;

var _semver = require('semver');

var _semver2 = _interopRequireDefault(_semver);

var _list = require('./list.generated');

var _list2 = _interopRequireDefault(_list);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _escapePackageName = require('./escape-package-name');

var _tryResolve = require('try-resolve');

var _tryResolve2 = _interopRequireDefault(_tryResolve);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const matches = [];

function onMatchFound(pkg) {
  const scopedPackage = getPnpmfileScopedName(pkg);
  console.warn(`Incompatible package found: '${pkg.name}'`);
  console.log('Trying to use:', scopedPackage);
  if ((0, _tryResolve2.default)(scopedPackage)) {
    console.log('Patching.');
    const rp = require(scopedPackage).default;
    console.log('here', rp, pkg);
    //require('pnpmfile-read-package-json')(rp)(pkg)
  }
  console.warn(`Not found. Please run: pnpm i -D ${scopedPackage}`);
  matches.push(pkg);
}

function getPnpmfileScopedName(pkg) {
  return `@pnpmfile/${(0, _escapePackageName.escape)(pkg.name)}`;
}

function after() {
  if (!matches.length) return;
  console.log('The following packages have issues with pnpm.');
  console.log('You must install the following packages:');
  const cmd = 'pnpm install ';
  const pkgs = matches.map(m => {
    return getPnpmfileScopedName(m);
  }).join(' ');
  console.log(cmd + pkgs);
}
//# sourceMappingURL=main.js.map