import { withDesign } from 'storybook-addon-designs';
import { Component } from 'vue';
import { ProgressBlock } from './index';
import { fakeUserProgress } from '~/shared/repository/fixtures/fake-user-progress';

export default {
  title: 'Components / Progress',
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
      ProgressBlock
    },
    data() {
      return {
        progress: fakeUserProgress()
      };
    },
    template: `
      <div style="padding: 20px;">
        <progress-block :progress="progress" />
      </div>
    `
  };
}

Default.parameters = {
  viewport: {
    defaultViewport: 'ipad'
  }
};
