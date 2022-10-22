import { withDesign } from 'storybook-addon-designs';
import { Component } from 'vue';
import { uiDropdown } from '~/components/ui';

export default {
  title: 'Components / Ui / Dropdown',
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
      uiDropdown
    },
    data() {
      return {
        isVisible: false
      };
    },
    template: `
      <div style="
        padding: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
      ">
        <ui-dropdown :is-visible.sync="isVisible">
          <template slot="reference">
            <button>
              Click
            </button>
          </template>

          <template slot="content">
            Content
          </template>
        </ui-dropdown>
      </div>
    `
  };
}
