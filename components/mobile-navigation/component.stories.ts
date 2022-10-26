import { withDesign } from 'storybook-addon-designs';
import { Component } from 'vue';
import { MobileNavigation } from './index';

export default {
  title: 'Components / MobileNavigation',
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
      MobileNavigation
    },
    template: `
      <div style="padding: 20px;">
        <mobile-navigation />
      </div>
    `
  };
}

Default.parameters = {
  viewport: {
    defaultViewport: 'ipad'
  }
};
