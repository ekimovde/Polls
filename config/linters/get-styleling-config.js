function getStylelintConfig({ ignoreFiles = [] }) {
  const stylelintConfig = require('./stylelint-config');

  if (ignoreFiles.length) {
    stylelintConfig.ignoreFiles = stylelintConfig.ignoreFiles.concat(ignoreFiles);
  }

  return stylelintConfig;
}

module.exports = { getStylelintConfig };
