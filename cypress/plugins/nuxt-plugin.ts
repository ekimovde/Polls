/* eslint-disable @typescript-eslint/no-unsafe-return,@typescript-eslint/explicit-module-boundary-types */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const nuxt = require('nuxt');

export function cypressNuxtPlugin(opts?) {
  return nuxt
    .getWebpackConfig('client', opts ? opts.loadOptions : undefined)
    .then((nuxtWebpackConfig) => {
      if (opts && opts.transform) {
        return opts.transform(nuxtWebpackConfig);
      }
      return nuxtWebpackConfig;
    })
    .then((transformedConfig) => {
      transformedConfig.plugins = transformedConfig.plugins.filter(
        (v) => !(v.constructor && v.constructor.name === 'HtmlWebpackPlugin')
      );

      delete transformedConfig.entry.app;

      return transformedConfig;
    });
}
