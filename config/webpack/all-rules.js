const { jsRule } = require('./js-rule');
const { vueRule } = require('./vue-rule');
const { tsRule } = require('./ts-rule');
const { cssRule } = require('./css-rule');
const { scssRule } = require('./scss-rule');
const { fileRule } = require('./file-rule');

const rules = [
  fileRule,
  cssRule,
  scssRule,
  jsRule,
  tsRule,
  vueRule
];

module.exports = { rules };
