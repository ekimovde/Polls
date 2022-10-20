import { withDesign } from 'storybook-addon-designs';
import { Component } from 'vue';
import { LinkList } from './index';

export default {
  title: 'Components / LinkList',
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
      LinkList
    },
    template: `
      <div style="padding: 20px;">
        <link-list />
      </div>
    `
  };
}
