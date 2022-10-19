const path = require('path');
const { rootPath } = require('./root-path');

function resolveAliases() {
  return {
    '~': path.resolve(rootPath),
    '@assets': path.resolve(rootPath, './assets')
  };
}

module.exports.getWebpackAliases = resolveAliases;
