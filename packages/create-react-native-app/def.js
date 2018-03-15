export default {
  // `metro` pnpm support.
  'react-native@0.52.0': {
    dependencies: {
      metro: 'npm:metro-pnpm@0.24.7-vjpr.1',
      //'metro-resolver': '~/dev-live/metro/.dev/metro-resolver-0.28.0.tgz',
      uuid: '*', // Libraries/Blob/Blob.js
    },
  },

  'react-native-scripts': {
    dependencies: {
      expo: '*',
    },
  },

  'metro-core': {
    dependencies: {
      wordwrap: '*',
    },
  },

  // Cause: expo/src/Notifications.js
  expo: {
    dependencies: {
      fbjs: '^0.8.16',
      lodash: '*',
      'json-schema-traverse': '*',
    },
  },

  // react-native-gesture-handler@1.0.0-alpha.39
  'react-native-gesture-handler': {
    dependencies: {
      fbjs: '^0.8.16',
    },
  },

  // @expo/vector-icons@6.3.1
  '@expo/vector-icons': {
    dependencies: {
      'prop-types': '*',
    },
  },

  'metro-pnpm': {
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

  /*
    pnpm ls babel-preset-expo

    ├─┬ expo@25.0.0
    │ └── babel-preset-expo@4.0.0
    └─┬ react-native-scripts@1.11.1
      └─┬ expo@25.0.0
        └── babel-preset-expo@4.0.0
    */
  '<root>': {
    dependencies: {
      'babel-preset-expo': '^4',
      'babel-plugin-transform-react-jsx-source': '6',
    },
  },
}
