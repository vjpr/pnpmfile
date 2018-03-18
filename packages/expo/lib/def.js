'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {

  '<root>': {
    dependencies: {
      /*
        pnpm ls babel-preset-expo
         ├─┬ expo@25.0.0
        │ └── babel-preset-expo@4.0.0
        └─┬ react-native-scripts@1.11.1
          └─┬ expo@25.0.0
            └── babel-preset-expo@4.0.0
      */
      'babel-preset-expo': '^4',
      'babel-plugin-transform-react-jsx-source': '6'
    }
  },

  expo: {
    dependencies: {
      fbjs: '^0.8.16', // expo/src/Notifications.js
      lodash: '*',
      'json-schema-traverse': '*'
    }
  },

  // @expo/vector-icons@6.3.1
  '@expo/vector-icons': {
    dependencies: {
      'prop-types': '*'
    }
  },

  // react-native-gesture-handler@1.0.0-alpha.39
  'react-native-gesture-handler': {
    dependencies: {
      fbjs: '^0.8.16'
    }
  }

};
//# sourceMappingURL=def.js.map