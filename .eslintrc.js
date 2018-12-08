module.exports = require('@hellpack/eslint')({
  rules: {
    'prettier/prettier': 'error',
    'func-names': ['error', 'never'],
    'no-param-reassign': 0,
    'class-methods-use-this': 0,
    'import/no-extraneous-dependencies': 0,
    'prefer-template': 0,
    'no-console': 0,
    'global-require': 0,
  },
});
