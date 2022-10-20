import { withDesign } from 'storybook-addon-designs';
import { Component } from 'vue';
import { SharedColor } from '~/components/shared/color';
import { SharedColorTheme } from './component';

export default {
  title: 'Components / Shared / Color',
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url: ''
    }
  }
};

export const PurpleTheme = (): Component => create();
export const OrangeTheme = (): Component => create(SharedColorTheme.orange);
export const GreenTheme = (): Component => create(SharedColorTheme.green);
export const RedTheme = (): Component => create(SharedColorTheme.red);
export const PinkTheme = (): Component => create(SharedColorTheme.pink);
export const BlueTheme = (): Component => create(SharedColorTheme.blue);
export const GreyTheme = (): Component => create(SharedColorTheme.grey);

function create(theme = SharedColorTheme.purple): Component {
  return {
    components: {
      SharedColor
    },
    data() {
      return {
        theme
      };
    },
    template: `
      <div style="
        padding: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
      ">
        <shared-color :theme="theme" />
      </div>
    `
  };
}
