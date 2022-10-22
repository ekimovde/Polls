import { withDesign } from 'storybook-addon-designs';
import { Component } from 'vue';
import { uiCheckbox } from '~/components/ui';

export default {
  title: 'Components / Ui / Checkbox',
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
      uiCheckbox
    },
    template: `
      <div style="
        padding: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
      ">
        <ui-checkbox />
      </div>
    `
  };
}
