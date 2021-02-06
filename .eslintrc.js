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
    'import/extensions': 'off',
    'no-console': 'off'
  },
  globals: {
    __DEV__: true,
  },
};
