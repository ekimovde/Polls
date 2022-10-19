import { withDesign } from 'storybook-addon-designs';
import { Component } from 'vue';
import { uiButton } from '~/components/ui';

export default {
  title: 'Components / Ui / Button',
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
      uiButton
    },
    template: `
      <div style="
        padding: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
      ">
        <ui-button>
          Button
        </ui-button>
      </div>
    `
  };
}
