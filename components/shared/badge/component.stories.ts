import { withDesign } from 'storybook-addon-designs';
import { Component } from 'vue';
import { SharedBadge } from '~/components/shared/badge';
import { SharedColorTheme } from '../color/component';
import { SharedBadgeSize } from './component';

export default {
  title: 'Components / Shared / Badge',
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
export const IsXlSize = (): Component => create();
export const IsXsSize = (): Component => create({ size: SharedBadgeSize.xs });
export const IsSmallSize = (): Component => create({ size: SharedBadgeSize.small });
export const IsUppercase = (): Component => create({
  theme: SharedColorTheme.pinkLight,
  size: SharedBadgeSize.small,
  isUppercase: true
});

function create(props = {}): Component {
  return {
    components: {
      SharedBadge
    },
    data() {
      return {
        theme: SharedColorTheme.purple,
        size: SharedBadgeSize.xl,
        isUppercase: false,
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
        <shared-badge
          :theme="theme"
          :size="size"
          :is-uppercase="isUppercase"
        />
      </div>
    `
  };
}
