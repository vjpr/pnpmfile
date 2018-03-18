export default {
  'react-native@0.52.0': {
    dependencies: {
      metro: 'npm:metro-pnpm@0.24.7-vjpr.1',
      uuid: '*', // Libraries/Blob/Blob.js
    },
  },
  'react-native@0.54.2': {
    dependencies: {
      'metro-resolver': 'npm:metro-pnpm@0.28.0-vjpr.2',
      //'metro-resolver': '~/dev-live/metro/.dev/metro-resolver-pnpm-0.28.0-vjpr.2.tgz',
    },
  },
  'metro-pnpm@0.24.7-vjpr.1': {
    dependencies: {
      'babel-plugin-transform-flow-strip-types': '6',
      'babel-plugin-transform-object-rest-spread': '6',
      'babel-plugin-transform-class-properties': '6',
      'babel-plugin-transform-async-to-generator': '6',
      'babel-plugin-syntax-trailing-function-commas': '6',
      'babel-template': '6',
      resolve: '*',
      xtend: '*',
      errno: '*',
    },
  },
  'metro-core': {
    dependencies: {
      wordwrap: '*',
    },
  },
}
