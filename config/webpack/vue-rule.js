const vueRule = {
  test: /\.vue$/,
  use: [
    {
      loader: 'vue-loader',
      options: {
        loaders: {
          scss: ['vue-style-loader', 'css-loader', 'sass-loader', 'postcss-loader']
        }
      }
    }
  ]
};

module.exports = { vueRule };
