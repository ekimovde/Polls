import { withDesign } from 'storybook-addon-designs';
import { Component } from 'vue';
import { HomeRemote } from './index';

export default {
  title: 'Components / Home / Remote',
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
      HomeRemote
    },
    template: `
      <div style="padding: 20px;">
        <home-remote />
      </div>
    `
  };
}

Default.parameters = {
  viewport: {
    defaultViewport: 'desktopSmall'
  }
};
