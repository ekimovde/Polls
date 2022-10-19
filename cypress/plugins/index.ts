import { startDevServer } from '@cypress/webpack-dev-server';
import { cypressNuxtPlugin } from './nuxt-plugin';
import PluginConfig = Cypress.PluginConfig;

export default <PluginConfig>((on, config) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return cypressNuxtPlugin().then(webpackConfig => {
    on('dev-server:start', (options) => {
      return startDevServer({ options, webpackConfig });
    });

    return config;
  });
});
