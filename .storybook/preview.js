import { addDecorator, addParameters } from '@storybook/vue';
import Vue from 'vue';
import vueBemCn from 'vue-bem-cn';
import VueRouter from 'vue-router'
import InlineSvg from 'vue-inline-svg';
import Draggable from 'vuedraggable';

// eslint-disable-next-line import/extensions
import 'normalize.css';
import './storybook.scss';
// import '../assets/fonts/index.scss';
import '../assets/scss/variables.scss';
import '../assets/scss/mixins.scss';
import createFakeServices, { fakeStore } from '~/shared/repository/fake-services-factory';
import Vuex from 'vuex';

Vue.use(vueBemCn);
Vue.use(Vuex);
Vue.use(Draggable);

Vue.component('inline-svg', InlineSvg);

const services = createFakeServices();
// noinspection JSUnusedGlobalSymbols
Vue.prototype.$projectServices = services;
window.$nuxt = { $projectServices: services }

Vue.prototype.$route = {
  path: window.location.href
};

const decoratorTemplate = () => {
  return {
    template: `
      <div class="storybook">
        <div class="storybook__story">
          <story/>
        </div>
      </div>
    `
  };
};

addDecorator(decoratorTemplate);

addParameters({
  layout: 'fullscreen',
  options: {
    storySort: (a, b) => (
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true })
    )
  }
});

addParameters({
  viewport: {
    viewports: {
      iphonex: {
        name: 'iPhone X',
        styles: {
          height: '824px',
          width: '375px'
        },
        type: 'mobile'
      },
      iphone12promax: {
        name: 'iPhone 12 Pro Max',
        styles: {
          height: '926px',
          width: '428px'
        },
        type: 'mobile'
      },
      mobileMax: {
        name: 'Mobile Max',
        styles: {
          height: '926px',
          width: '480px'
        },
        type: 'mobile'
      },
      ipad: {
        name: 'desktop 768',
        styles: {
          height: '480px',
          width: '768px'
        },
        type: 'ipad'
      },
      ipadMax: {
        name: 'desktop 992',
        styles: {
          height: '480px',
          width: '992px'
        },
        type: 'ipad'
      },
      desktopSmall: {
        name: 'desktop 1280',
        styles: {
          height: '768px',
          width: '1280px'
        },
        type: 'desktop'
      },
      desktop: {
        name: 'desktop 1440',
        styles: {
          height: '1080px',
          width: '1920px'
        },
        type: 'desktop'
      }
    },
    defaultViewport: 'iphonex',
  }
});

Vue.use(VueRouter)
Vue.component('NuxtLink', Vue.component('RouterLink'))

export const decorators = [(story) => ({
  components: { story },
  template: `<story />`,
  router: new VueRouter(),
  store: fakeStore
})];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
