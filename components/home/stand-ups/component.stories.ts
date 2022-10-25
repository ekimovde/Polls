import { withDesign } from 'storybook-addon-designs';
import { Component } from 'vue';
import { HomeStandUps } from './index';

export default {
  title: 'Components / Home / StandUps',
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
      HomeStandUps
    },
    template: `
      <div style="padding: 20px;">
        <home-stand-ups />
      </div>
    `
  };
}

Default.parameters = {
  viewport: {
    defaultViewport: 'desktopSmall'
  }
};
