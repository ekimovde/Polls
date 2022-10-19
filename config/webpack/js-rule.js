const { babelLoader } = require('./babel-loader');

const jsRule = {
  test: /\.js$/,
  use: babelLoader
};

module.exports = { jsRule };
