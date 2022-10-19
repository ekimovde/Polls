const { babelOptions } = require('./babel-options');

const babelLoader = {
  loader: 'babel-loader',
  options: babelOptions
};

module.exports = { babelLoader };
