import { withDesign } from 'storybook-addon-designs';
import { Component } from 'vue';
import { SharedModalUploader } from '~/components/shared';

export default {
  title: 'Components / Shared / ModalUploader',
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
      SharedModalUploader
    },
    data() {
      return {
        isVisible: false
      };
    },
    template: `
      <div style="
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
      ">
        <button @click="isVisible = !isVisible">
          Click
        </button>

        <shared-modal-uploader :is-visible.sync="isVisible" />
      </div>
    `
  };
};

Default.parameters = {
  viewport: {
    defaultViewport: 'ipad'
  }
};
