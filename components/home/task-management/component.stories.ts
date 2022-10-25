import { withDesign } from 'storybook-addon-designs';
import { Component } from 'vue';
import { HomeTaskManagement } from './index';

export default {
  title: 'Components / Home / TaskManagement',
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
      HomeTaskManagement
    },
    template: `
      <div style="padding: 20px;">
        <home-task-management />
      </div>
    `
  };
}

Default.parameters = {
  viewport: {
    defaultViewport: 'desktopSmall'
  }
};
