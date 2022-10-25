import { withDesign } from 'storybook-addon-designs';
import { Component } from 'vue';
import { HomeInsights } from './index';

export default {
  title: 'Components / Home / Insights',
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
      HomeInsights
    },
    template: `
      <div style="padding: 20px;">
        <home-insights />
      </div>
    `
  };
}

Default.parameters = {
  viewport: {
    defaultViewport: 'desktopSmall'
  }
};
