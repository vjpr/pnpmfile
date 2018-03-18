'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (entries) {
  return function (pkg) {
    for (const [key, entry] of Object.entries(entries)) {
      let { name, version } = (0, _parsePackageName2.default)(key);
      if (version === '') version = '*';
      if (key === '<root>') {
        name = getRootPackageName();
      }

      // TODO(vjpr): We need to find the best version to replace. Maybe sort by semver beforehand.
      if (name === pkg.name) {
        if (_semver2.default.satisfies(pkg.version, version)) {
          const allowed = ['dependencies', 'devDependencies', 'peerDependencies'];
          const originalPkg = _lodash2.default.cloneDeep(pkg);
          const obj = _lodash2.default.pick(entry, allowed);
          _lodash2.default.merge(pkg, obj); // Mutates!
          const before = _lodash2.default.pick(originalPkg, allowed);
          const after = _lodash2.default.pick(pkg, allowed);
          if (shouldPrintDiff) printDiff(pkg, before, after);

          // TODO(vjpr): Support callback function for custom changes.
          break;
        }
      }
    }
  };
};

var _semver = require('semver');

var _semver2 = _interopRequireDefault(_semver);

var _parsePackageName = require('parse-package-name');

var _parsePackageName2 = _interopRequireDefault(_parsePackageName);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _debug = require('debug');

var _debug2 = _interopRequireDefault(_debug);

var _diff = require('diff');

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const debug = (0, _debug2.default)('pnpmfile-read-package-json');

// Using `debug`.
const shouldPrintDiff = true;

function getRootPackageName() {
  const pjson = require((0, _path.join)(process.cwd(), 'package.json'));
  return pjson.name;
}

function printDiff(pkg, before, after) {
  const delta = (0, _diff.diffJson)(before, after);
  const str = delta.map(part => {
    var color = part.added ? 'green' : part.removed ? 'red' : 'grey';
    return _chalk2.default[color](part.value);
  }).join('');
  if (delta.length) {
    debug(`Modified '${pkg.name}'`);
    debug(str);
  }
}
//# sourceMappingURL=index.js.map