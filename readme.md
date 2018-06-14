# @pnpmfile

> Packages for fixing pnpm-incompatible packages.

## `pnpmfile.js` tips

Test changes with `pnpm up`.

For `console.log` to appear correctly use: `pnpm up --reporter=append-only`.

## Publish

```
npm run release
```

## Development

- `pnpm recursive link`
- `npm run build-all-watch`
    - Transpile all modules as they change in every package with `lerna exec`.

### Build all packages

Uses lerna to transpile all packages.

```
npm run build-all
```

### Using un-transpiled ESNext with babel on-the-fly

There is a tool I wrote that can make use of the `package.json#modules` entry to allow transpiling on the fly.

TODO: Add how to use it here.

## pnpmfile-check

TODO: Can't remember what this does.

## Symlink locally to test with real project

```
cd pnpmfile-read-package-json && pnpm link
cd preset-create-react-native-app && pnpm link
```

```
pnpm run build-check  
```
