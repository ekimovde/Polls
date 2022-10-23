import { withDesign } from 'storybook-addon-designs';
import { Component } from 'vue';
import { SummaryBlock } from './index';

export default {
  title: 'Components / Summary',
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
      SummaryBlock
    },
    template: `
      <div style="padding: 20px;">
        <summary-block />
      </div>
    `
  };
}
