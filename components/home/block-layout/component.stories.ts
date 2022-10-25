import { withDesign } from 'storybook-addon-designs';
import { Component } from 'vue';
import { HomeBlockLayout } from './index';

export default {
  title: 'Components / Home / BlockLayout',
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
      HomeBlockLayout
    },
    template: `
      <div style="padding: 20px;">
        <home-block-layout />
      </div>
    `
  };
}

Default.parameters = {
  viewport: {
    defaultViewport: 'desktopSmall'
  }
};
