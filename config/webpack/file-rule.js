const fileRule = {
  test: /\.(eot|svg|ttf|woff|png|woff2|jpg)$/,
  use: {
    loader: 'file-loader',
    options: {
      esModule: false
    }
  }
};

module.exports = { fileRule };
