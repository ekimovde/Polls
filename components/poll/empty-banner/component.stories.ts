import { withDesign } from 'storybook-addon-designs';
import { Component } from 'vue';
import { PollEmptyBanner } from './index';

export default {
  title: 'Components / Poll / EmptyBanner',
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
      PollEmptyBanner
    },
    template: `
      <div style="padding: 20px;">
        <poll-empty-banner />
      </div>
    `
  };
};

Default.parameters = {
  viewport: {
    defaultViewport: 'ipad'
  }
};
