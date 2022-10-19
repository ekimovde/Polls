const { getEslintConfig } = require('./config/linters/get-eslint-config');

module.exports = getEslintConfig({
  parserOptions: {
    project: 'tsconfig.json'
  },
  rules: {
    'import/extensions': 'off',
    'vue/max-attributes-per-line': 1
  }
});
