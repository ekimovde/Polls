import { withDesign } from 'storybook-addon-designs';
import { Component } from 'vue';
import { uiTooltip } from '~/components/ui';

export default {
  title: 'Components / Ui / Tooltip',
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
      uiTooltip
    },
    template: `
      <div style="
        padding: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
      ">
        <ui-tooltip />
      </div>
    `
  };
}
