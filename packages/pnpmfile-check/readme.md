Add to your `pnpmfile.js` `readPackage` hook.

Let's you know which hooks are available for packages that don't support pnpm out of the box.

```
'use strict'
module.exports = {
  hooks: {
    readPackage,
  },
}

function readPackage(pkg) {
  require('pnpmfile-check')(pkg)
}
```
