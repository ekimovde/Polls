import { withDesign } from 'storybook-addon-designs';
import { Component } from 'vue';
import { PollQuestion } from './index';

export default {
  title: 'Components / Poll / Question',
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
      PollQuestion
    },
    template: `
      <div style="padding: 20px;">
        <poll-question />
      </div>
    `
  };
};

Default.parameters = {
  viewport: {
    defaultViewport: 'ipad'
  }
};
