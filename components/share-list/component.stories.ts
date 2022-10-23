import { withDesign } from 'storybook-addon-designs';
import { Component } from 'vue';
import { ShareList } from './index';

export default {
  title: 'Components / ShareList',
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
      ShareList
    },
    template: `
      <div style="padding: 20px;">
        <share-list />
      </div>
    `
  };
}
