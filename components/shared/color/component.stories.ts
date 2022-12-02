import { withDesign } from 'storybook-addon-designs';
import { Component } from 'vue';
import { SharedColor } from '~/components/shared/color';
import { SharedColorTheme, SharedColorSize } from './component';

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
export const OrangeTheme = (): Component => create({ theme: SharedColorTheme.orange });
export const GreenTheme = (): Component => create({ theme: SharedColorTheme.green });
export const RedTheme = (): Component => create({ theme: SharedColorTheme.red });
export const PinkTheme = (): Component => create({ theme: SharedColorTheme.pink });
export const PinkLightTheme = (): Component => create({ theme: SharedColorTheme.pinkLight });
export const BlueTheme = (): Component => create({ theme: SharedColorTheme.blue });
export const GreyTheme = (): Component => create({ theme: SharedColorTheme.grey });
export const isXlSize = (): Component => create();
export const isXsSize = (): Component => create({ size: SharedColorSize.xs });

function create(props = {}): Component {
  return {
    components: {
      SharedColor
    },
    data() {
      return {
        theme: SharedColorTheme.purple,
        size: SharedColorSize.xl,
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
        <shared-color
          :theme="theme"
          :size="size"
        />
      </div>
    `
  };
}
