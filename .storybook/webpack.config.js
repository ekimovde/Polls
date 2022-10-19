const { linterPlugins } = require('../config/webpack/linter-plugins');
const { getWebpackAliases } = require('../config/webpack/aliases');
const { definePlugin } = require('../config/webpack/define-plugin');

const { rules } = require('../config/webpack/all-rules');

module.exports = async ({ config }) => {
  config.stats = 'normal';

  config.module.rules = rules;

  config.plugins = config.plugins.concat([definePlugin]);

  if (!process.env.LINT_ON_BUILD) {
    config.plugins = config.plugins.concat(linterPlugins);
  }

  const pluginsToIgnore = [
    'NormalModuleReplacementPlugin',
    !process.env.IS_WINDOWS_SYSTEM ? 'CaseSensitivePathsPlugin' : ''
  ].filter(Boolean);

  config.plugins = config.plugins.filter(item => !pluginsToIgnore.includes(item.constructor.name));
  config.resolve.alias = { ...config.resolve.alias, ...getWebpackAliases() };

  return config;
};
