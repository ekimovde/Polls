import { withDesign } from 'storybook-addon-designs';
import { Component } from 'vue';
import { uiSwitch } from '~/components/ui';
import { UiSwitchSize, UiSwitchView } from './component';

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
export const XsSize = (): Component => create({ size: UiSwitchSize.xs });
export const DefaultView = (): Component => create();
export const RegularView = (): Component => create({ view: UiSwitchView.regular });

function create(props = {}): Component {
  return {
    components: {
      uiSwitch
    },
    data() {
      return {
        isChecked: false,
        size: UiSwitchSize.default,
        view: UiSwitchView.default,
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
        <ui-switch
          v-model="isChecked"
          :size="size"
          :view="view"
          active-text="Yes"
        />
      </div>
    `
  };
}
