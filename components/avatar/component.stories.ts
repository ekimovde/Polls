import { withDesign } from 'storybook-addon-designs';
import { Component } from 'vue';
import { AvatarBlock } from './index';

export default {
  title: 'Components / Avatar',
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
      AvatarBlock
    },
    data() {
      return {
        src: ''
      };
    },
    template: `
      <div style="
        padding: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
      ">
        <avatar-block :src="src" />
      </div>
    `
  };
}
