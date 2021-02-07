module.exports = {
  root: true,
  extends: 'airbnb',
  parser: '@babel/eslint-parser',
  settings: {
    'import/resolver': {
      'babel-plugin-root-import': {
        rootPathPrefix: '~',
        rootPathSuffix: 'src',
      },
    },
  },
  rules: {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'import/no-named-as-default': 'off',
    'import/extensions': 'off',
    'no-console': 'off',
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off'
    'no-use-before-define': 'off'
  },
  globals: {
    __DEV__: true,
  },
};
