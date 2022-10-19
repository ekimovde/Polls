/* eslint-disable no-useless-escape */
const babelOptions = {
  cacheDirectory: true,
  sourceType: 'unambiguous',
  exclude: [
    // \\ for Windows, \/ for Mac OS and Linux
    /node_modules[\\\/]core-js/,
    /node_modules[\\\/]webpack[\\\/]buildin/
  ],
  presets: [
    ['@babel/preset-env', {
      useBuiltIns: 'usage',
      corejs: 3
    }]
  ],
  plugins: ['@babel/plugin-transform-runtime']
};

module.exports = { babelOptions };
