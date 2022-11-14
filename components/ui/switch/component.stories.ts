import { withDesign } from 'storybook-addon-designs';
import { Component } from 'vue';
import { uiSwitch } from '~/components/ui';
import { UiSwitchSize } from './component';

export default {
  title: 'Components / Ui / Switch',
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url: ''
    }
  }
};

export const DefaultSize = (): Component => create();
export const XsSize = (): Component => create(UiSwitchSize.xs);

function create(size = UiSwitchSize.default): Component {
  return {
    components: {
      uiSwitch
    },
    data() {
      return {
        isChecked: false,
        size
      };
    },
    template: `
      <div style="
        padding: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
      ">
        <ui-switch
          v-model="isChecked"
          :size="size"
          active-text="Yes"
        />
      </div>
    `
  };
}
