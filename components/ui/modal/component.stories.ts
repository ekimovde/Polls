import { withDesign } from 'storybook-addon-designs';
import { Component } from 'vue';
import { uiModal } from '~/components/ui';

export default {
  title: 'Components / Ui / Modal',
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
      uiModal
    },
    data() {
      return {
        isVisible: true
      };
    },
    template: `
      <div style="
        padding: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
      ">
        <button @click="isVisible = !isVisible"> Click </button>

        <ui-modal :is-visible.sync="isVisible" />
      </div>
    `
  };
}
