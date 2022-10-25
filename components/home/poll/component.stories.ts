import { withDesign } from 'storybook-addon-designs';
import { Component } from 'vue';
import { HomePoll } from './index';

export default {
  title: 'Components / Home / Poll',
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
      HomePoll
    },
    template: `
      <div style="padding: 20px;">
        <home-poll />
      </div>
    `
  };
}

Default.parameters = {
  viewport: {
    defaultViewport: 'desktopSmall'
  }
};
