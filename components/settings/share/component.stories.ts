import { withDesign } from 'storybook-addon-designs';
import { Component } from 'vue';
import { SettingsShare } from './index';

export default {
  title: 'Components / Settings / Share',
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
      SettingsShare
    },
    template: `
      <div style="padding: 20px;">
        <settings-share />
      </div>
    `
  };
}

Default.parameters = {
  viewport: {
    defaultViewport: 'ipad'
  }
};
