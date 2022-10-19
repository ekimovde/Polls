import { withDesign } from 'storybook-addon-designs';
import { Component } from 'vue';
import { FooterBlock } from './index';

export default {
  title: 'Components / Footer',
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
      FooterBlock
    },
    template: `
      <div style="padding: 20px;">
        <footer-block />
      </div>
    `
  };
}

Default.parameters = {
  viewport: {
    defaultViewport: 'ipad'
  }
};
