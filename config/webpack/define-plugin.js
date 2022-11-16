const { DefinePlugin } = require('webpack');

const definePlugin = new DefinePlugin({
  RESPOND_MOCK_RESULT_DELAY: process.env.RESPOND_MOCK_RESULT_DELAY || 1000,
  USE_PHOTO_STUB: process.env.USE_PHOTO_STUB,
  SHOP_DATA_REQUEST_INTERVAL_IN_MINUTES: process.env.SHOP_DATA_REQUEST_INTERVAL_IN_MINUTES,
  USE_FAKE_BACKEND: process.env.USE_FAKE_BACKEND,
  FILE_UPLOAD_LIMIT_IN_BYTES: process.env.FILE_UPLOAD_LIMIT_IN_BYTES,
  UNSPLASH_ACCESS_KEY: process.env.UNSPLASH_ACCESS_KEY
});

module.exports = { definePlugin };
