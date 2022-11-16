import { withDesign } from 'storybook-addon-designs';
import { Component } from 'vue';
import { uiModal } from '~/components/ui';
import { UiModalView } from './component';

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

export const DefaultView = (): Component => create();
export const RegularView = (): Component => create({ view: UiModalView.regular });

function create(props = {}): Component {
  return {
    components: {
      uiModal
    },
    data() {
      return {
        isVisible: true,
        view: UiModalView.default,
        ...props
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

        <ui-modal
          :is-visible.sync="isVisible"
          :view="view"
        />
      </div>
    `
  };
}
