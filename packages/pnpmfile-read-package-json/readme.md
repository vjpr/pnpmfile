# pnpmfile-read-package-json

> Write `readPackage` hooks declaratively using json.

## Install

```
pnpm i -D pnpmfile-read-package-json
```

## Example

_pnpmfile.js_

```javascript
'use strict'
module.exports = {
  hooks: {
    readPackage,
  },
}

const readPackageJson = {
  'react-native@0.52.0': {
    dependencies: {
      metro: 'npm:metro-pnpm@0.24.7-vjpr.1',
      uuid: '*',
    },
    devDependencies: {},
    peerDependencies: {},
  },
}
const hook = require('pnpmfile-read-package-json')(readPackageJson)

function readPackage(pkg) {
  hook(pkg)
}
```

## Tips

**How to delete a package?**

```
dependencies: {
  lodash: null,
}
```
