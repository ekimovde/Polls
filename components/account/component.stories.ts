import { withDesign } from 'storybook-addon-designs';
import { Component } from 'vue';
import { AccountBlock } from './index';

export default {
  title: 'Components / Account',
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
      AccountBlock
    },
    template: `
      <div style="
        padding: 20px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
      ">
        <account-block />
      </div>
    `
  };
}
