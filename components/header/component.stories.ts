import { withDesign } from 'storybook-addon-designs';
import { Component } from 'vue';
import { HeaderBlock } from './index';

export default {
  title: 'Components / Header',
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
      HeaderBlock
    },
    template: '<header-block />'
  };
}

Default.parameters = {
  viewport: {
    defaultViewport: 'ipad'
  }
};
