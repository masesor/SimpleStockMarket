module.exports = {
    'env': {
      'browser': true,
      'node': true,
      'es6': true
    },
    'extends': [],
    'parser': 'babel-eslint',
    'parserOptions': {
      'ecmaFeatures': {
        'experimentalObjectRestSpread': true,
        'jsx': true
      },
      'sourceType': 'module'
    },
    'plugins': [
      'react'
    ],
    'rules': {
      'indent': ['warn', 2, { 'SwitchCase': 1 }],
      'quotes': ['warn', 'single'],
      'semi': ['error', 'always'],
      'object-curly-spacing': ['error', 'always'],
      'comma-spacing': ['error', { 'before': false, 'after': true }],
      'linebreak-style': 'off',
      'no-console': 'off'
    }
  };
  