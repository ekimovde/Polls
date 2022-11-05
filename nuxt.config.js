/* eslint-disable */
import webpack from 'webpack';
import { getWebpackAliases } from './config/webpack/aliases';

require('dotenv-flow').config({purge_dotenv: true});

const ESLintPlugin = require('eslint-webpack-plugin');
const isDev = process.env.NODE_ENV !== 'production';
const LINT_ON_BUILD = process.env.LINT_ON_BUILD === 'true';
const API_URL = JSON.stringify(process.env.API_URL);
const USE_HTTPS = process.env.USE_HTTPS === 'true';
const USE_FAKE_BACKEND = process.env.USE_FAKE_BACKEND === 'true';
const USE_LOCAL_CERTIFICATE = process.env.USE_LOCAL_CERTIFICATE === 'true';
const USE_PHOTO_STUB = process.env.USE_PHOTO_STUB === 'true';

const config = {};

module.exports = {
  telemetry: false,
  server: {
    port: 3000,
    // host: '0.0.0.0',
    timing: false
  },
  ...config,
  middleware: ['auth.ts', 'header.ts', 'footer.ts'],
  target: 'static',
  ssr: false,
  head: {
    title: 'App',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: 'App'},
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no' }
    ],
    htmlAttrs: {
      lang: 'ru'
    },
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' },
      { rel: 'stylesheet', href: 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' }
    ]
  },
  css: [
    'normalize.css/normalize.css'
  ],
  plugins: [
    '~plugins/axios.ts',
    '~plugins/el-ui-loading',
    '~plugins/vue-bem-cn',
    '~plugins/project-services',
    '~plugins/vuelidate',
    '~plugins/inline-svg',
    { src: '~plugins/persisted-state', mode: 'client' }
  ],
  messages: {
    loading: 'Загрузка...',
    error_404: 'Страница не найдена',
    server_error: 'Страница временно недоступна',
    nuxtjs: '',
    back_to_home: 'На главную',
    server_error_details: '',
    client_error: 'Страница не найдена',
    client_error_details: ''
  },
  loading: { color: '#E2D7D8' },
  build: {
    vendor: ['axios'],
    transpile: [
      '@cypress/mount-utils'
    ],
    babel: {
      compact: false,
      presets() {
        return [
          ["@nuxt/babel-preset-app", {
            useBuiltIns: 'entry',
            corejs: { version: 3 }
          }]
        ]
      },
      plugins: [
        '@babel/plugin-proposal-optional-chaining',
        '@babel/plugin-proposal-nullish-coalescing-operator',
        ['@babel/plugin-proposal-private-property-in-object', { loose: true }]
      ]
    },
    postCss: {
      loader: 'postcss-loader',
      options: {
        config: {
          path: `${__dirname}/postcss.config.js`
        }
      }
    },
    loaders: {
      scss: { sourceMap: false }
    },
    ...(!isDev && {
      optimizeCss: true,
      filenames: {
        app: ({ isDev }) => (isDev ? '[name].js' : 'js/[name].[contenthash].js'),
        chunk: ({ isDev }) => (isDev ? '[name].js' : 'js/[contenthash].js'),
        css: ({ isDev }) => (isDev ? '[name].css' : 'css/[contenthash].css'),
        img: ({ isDev }) => (isDev ? '[path][name].[ext]' : 'img/[contenthash:7].[ext]'),
        font: ({ isDev }) => (isDev ? '[path][name].[ext]' : 'fonts/[contenthash:7].[ext]'),
        video: ({ isDev }) => (isDev ? '[path][name].[ext]' : 'videos/[contenthash:7].[ext]')
      },
      extractCSS: {
        ignoreOrder: true
      },
      optimization: {
        minimize: true
      },
      html: {
        minify: {
          collapseBooleanAttributes: true,
          decodeEntities: true,
          minifyCSS: true,
          minifyJS: true,
          processConditionalComments: true,
          removeEmptyAttributes: true,
          removeRedundantAttributes: true,
          trimCustomFragments: true,
          useShortDoctype: true
        }
      },
      splitChunks: {
        layouts: false,
        pages: true,
        commons: true
      }
    }),
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.devtool = 'source-map';
      }

      if (LINT_ON_BUILD) {
        config.plugins.push(
          new ESLintPlugin({
            extensions: ['js', 'ts', 'vue']
          })
        );
      }

      config.resolve.alias = {
        ...config.resolve.alias,
        ...getWebpackAliases()
      }
      config.resolve.symlinks = false;
    },
    plugins: [
      new webpack.DefinePlugin({
        USE_HTTPS: USE_HTTPS,
        IS_PRODUCTION: !isDev,
        API_URL: API_URL,
        USE_FAKE_BACKEND: USE_FAKE_BACKEND,
        USE_LOCAL_CERTIFICATE: USE_LOCAL_CERTIFICATE,
        RESPOND_MOCK_RESULT_DELAY: process.env.RESPOND_MOCK_RESULT_DELAY || 1000,
        USE_PHOTO_STUB: USE_PHOTO_STUB,
      })
    ]
  },
  buildModules: [
    '@nuxt/typescript-build',
  ],
  modules: [
    '@nuxtjs/axios'
  ],
  axios: {
    credentials: true,
    https: USE_HTTPS
  }
};
