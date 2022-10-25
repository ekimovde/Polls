import { withDesign } from 'storybook-addon-designs';
import { Component } from 'vue';
import { HomeDiscussions } from './index';

export default {
  title: 'Components / Home / Discussions',
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
      HomeDiscussions
    },
    template: `
      <div style="padding: 20px;">
        <home-discussions />
      </div>
    `
  };
}

Default.parameters = {
  viewport: {
    defaultViewport: 'desktopSmall'
  }
};
