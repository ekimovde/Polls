import { withDesign } from 'storybook-addon-designs';
import { Component } from 'vue';
import { ProgressBlock } from './index';
import { fakeUserProgressResponse } from '~/shared/repository/fixtures/fake-user-progress';

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
        userProgressResponse: fakeUserProgressResponse()
      };
    },
    template: `
      <div style="padding: 20px;">
        <progress-block :user-progress-response="userProgressResponse" />
      </div>
    `
  };
}

Default.parameters = {
  viewport: {
    defaultViewport: 'ipadMax'
  }
};
