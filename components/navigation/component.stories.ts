import { withDesign } from 'storybook-addon-designs';
import { Component } from 'vue';
import StoryRouter from 'storybook-vue-router';
import { NavigationBlock } from './index';
import { RoutesName } from '~/shared/repository/routes/routes-name';

export default {
  title: 'Components / Navigation',
  decorators: [
    withDesign,
    StoryRouter({}, {
      routes: [
        { path: '/index', name: RoutesName.index, component: NavigationBlock }
      ]
    })
  ],
  parameters: {
    design: {
      type: 'figma',
      url: ''
    }
  }
};

export const Default = (): Component => create();

function create(): Component {
  return {
    components: {
      NavigationBlock
    },
    created() {
      this.$router.push({ name: RoutesName.index });
    },
    template: `
      <div style="padding: 20px;">
        <router-view />
      </div>
    `
  };
}

Default.parameters = {
  viewport: {
    defaultViewport: 'ipad'
  }
};
