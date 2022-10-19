/* eslint-disable no-console */

import createFakeServices from '~/shared/repository/fake-services-factory';
import { Vue } from 'vue-property-decorator';
import Vuex from 'vuex';
import { NuxtLink } from '~/cypress/components/nuxt-link';

Vue.use(Vuex);

const services = createFakeServices();
Vue.prototype.$projectServices = services;

// @ts-ignore
window.$nuxt = { $projectServices: services }

Vue.component('NuxtLink', NuxtLink);


const messagesToSkip = [
  'Do not use built-in or reserved HTML elements as component id'
];

const knownUncaughtErorTagsToFail = ['Unhandled promise rejection:'];

Cypress.on('uncaught:exception', (e) => {
  if (new RegExp(knownUncaughtErorTagsToFail.join('|')).test(String(e))) {
    return;
  }
  return false;
});
