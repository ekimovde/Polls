const postCssLoader = {
  loader: 'postcss-loader',
  options: {
    sourceMap: false,
    config: {
      path: __dirname
    }
  }
};

const scssRule = {
  test: /\.scss$/,
  use: [
    'vue-style-loader',
    'css-loader',
    'sass-loader',
    postCssLoader
  ]
};

module.exports = { scssRule };
