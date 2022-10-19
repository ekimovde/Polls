const { babelLoader } = require('./babel-loader');

const tsRule = {
  test: /\.ts$/,
  use: [
    babelLoader,
    {
      loader: 'ts-loader',
      options: {
        transpileOnly: true
      }
    }
  ]
};

module.exports = { tsRule };
