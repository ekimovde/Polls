const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const tsPlugins = [
  new ForkTsCheckerWebpackPlugin({
    typescript: {
      memoryLimit: 8196
    }
  })
];

module.exports = { tsPlugins };
