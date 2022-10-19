import { withDesign } from 'storybook-addon-designs';
import { Component } from 'vue';
import { uiInput } from '~/components/ui';

export default {
  title: 'Components / Ui / Input',
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
      uiInput
    },
    template: `
      <div style="
        padding: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
      ">
        <ui-input />
      </div>
    `
  };
}
