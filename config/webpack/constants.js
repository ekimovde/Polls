const path = require('path');

const { WEBPACK_MODE } = process.env;
const IS_PRODUCTION = WEBPACK_MODE === 'production';
const PROJECT_ROOT = path.resolve(__dirname, './');
const PAGES_PATH = path.resolve(__dirname, '../../pages');
const LAYOUTS_PATH = path.resolve(__dirname, '../../layouts');
const COMPONENTS_PATH = path.resolve(__dirname, '../../components');

module.exports = {
  PROJECT_ROOT,
  PAGES_PATH,
  LAYOUTS_PATH,
  IS_PRODUCTION,
  WEBPACK_MODE,
  COMPONENTS_PATH
};
