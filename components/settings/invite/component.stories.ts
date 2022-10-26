import { withDesign } from 'storybook-addon-designs';
import { Component } from 'vue';
import { SettingsInvite } from './index';

export default {
  title: 'Components / Settings / Invite',
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
      SettingsInvite
    },
    template: `
      <div style="padding: 20px;">
        <settings-invite />
      </div>
    `
  };
}

Default.parameters = {
  viewport: {
    defaultViewport: 'ipad'
  }
};
