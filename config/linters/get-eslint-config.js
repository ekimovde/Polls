/**
 *
 * @param {Array} ignorePatterns
 * @param {Array} baseConfigs
 * @param {Object} settings
 * @param {Object} rules
 * @param {Array} plugins
 * @param {Object} parserOptions
 * @returns {Object}
 */
function getEslintConfig({
  ignorePatterns = [],
  baseConfigs = [],
  settings = {},
  rules = {},
  plugins = [],
  parserOptions = {}
}) {
  const eslintConfig = require('./eslint-config');

  return {
    ...eslintConfig,
    ignorePatterns: [...eslintConfig.ignorePatterns, ...ignorePatterns],
    extends: [...eslintConfig.extends, ...baseConfigs],
    settings: { ...eslintConfig.settings, ...settings },
    rules: { ...eslintConfig.rules, ...rules },
    plugins: [...eslintConfig.plugins, ...plugins],
    parserOptions: { ...eslintConfig.parserOptions, ...parserOptions }
  };
}

module.exports = { getEslintConfig };
