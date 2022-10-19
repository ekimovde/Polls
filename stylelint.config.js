const { getStylelintConfig } = require('./config/linters/get-styleling-config');

module.exports = getStylelintConfig({
  ignoreFiles: [
    '!.storybook',
    '**/dist/**'
  ]
});
