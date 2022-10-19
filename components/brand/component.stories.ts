import { withDesign } from 'storybook-addon-designs';
import { Component } from 'vue';
import { BrandBlock } from './index';

export default {
  title: 'Components / Brand',
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
      BrandBlock
    },
    template: `
      <div style="
        padding: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
      ">
        <brand-block />
      </div>
    `
  };
}
