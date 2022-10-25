import { withDesign } from 'storybook-addon-designs';
import { Component } from 'vue';
import { HomeFeatures } from './index';

export default {
  title: 'Components / Home / Features',
  decorators: [withDesign],
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
      HomeFeatures
    },
    template: `
      <div style="padding: 20px;">
        <home-features />
      </div>
    `
  };
}

Default.parameters = {
  viewport: {
    defaultViewport: 'desktopSmall'
  }
};
