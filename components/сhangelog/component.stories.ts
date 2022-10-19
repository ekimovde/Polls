import { withDesign } from 'storybook-addon-designs';
import { Component } from 'vue';
import { ChangelogBlock } from './index';

export default {
  title: 'Components / Changelog',
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
      ChangelogBlock
    },
    template: `
      <div style="padding: 20px;">
        <changelog-block />
      </div>
    `
  };
}
