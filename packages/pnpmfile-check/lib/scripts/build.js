#!/usr/bin/env babel-node
'use strict';

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _globby = require('globby');

var _globby2 = _interopRequireDefault(_globby);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _escapePackageName = require('../escape-package-name');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const dest = (0, _path.join)(process.cwd(), 'packages/pnpmfile-check/list.generated.json');

console.log('Compiling supported packages to', dest);

const json = {
  test: '1'
};

const packages = _globby2.default.sync('packages/*', {
  onlyDirectories: true,
  absolute: true,
  ignore: ['packages/pnpmfile-check', 'packages/pnpmfile-read-package-json', '**/node_modules/**']
});
console.log({ packages });

const out = packages.map(p => {
  const name = _path2.default.basename(p);
  const versionArray = require(p).default;
  if (!_lodash2.default.isArray(versionArray)) {
    console.error('Needs to be array in package', name);
    return;
  }
  const versions = (versionArray || []).map(p => p.versionRange);
  return { name: (0, _escapePackageName.unescape)(name), versions };
});

console.log(out);
_fs2.default.writeFileSync(dest, JSON.stringify(out, null, 2));
//# sourceMappingURL=build.js.map