/* eslint-disable import/no-extraneous-dependencies */
const StylelintPlugin = require('stylelint-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const { rootPath } = require('./root-path');

const linterPlugins = [
  new StylelintPlugin({
    context: rootPath,
    files: '**/*.(css|scss|vue)'
  }),
  new ESLintPlugin({
    extensions: ['js', 'ts', 'vue']
  })
];

module.exports = { linterPlugins };
