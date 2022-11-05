// eslint-disable-next-line import/no-extraneous-dependencies
const postCssInlineSvgConfig = {
  paths: [`${__dirname}/assets/svg`]
};

const plugins = {
  autoprefixer: {},
  'postcss-inline-svg': postCssInlineSvgConfig
};

module.exports = () => ({
  syntax: 'postcss-scss',
  plugins
});
