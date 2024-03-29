import { withDesign } from 'storybook-addon-designs';
import { Component } from 'vue';
import { BrandBlock } from './index';
import { BrandBlockSize } from './component';

export default {
  title: 'Components / Brand',
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url: ''
    }
  }
};

export const DefaultSize = (): Component => create();
export const XlSize = (): Component => create({ size: BrandBlockSize.xl });

function create(props = {}): Component {
  return {
    components: {
      BrandBlock
    },
    data() {
      return {
        size: BrandBlockSize.default,
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
        <brand-block :size="size" />
      </div>
    `
  };
}
