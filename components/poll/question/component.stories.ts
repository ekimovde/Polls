import { withDesign } from 'storybook-addon-designs';
import { Component } from 'vue';
import { PollQuestion } from './index';
import { fakePollQuestion } from '~/shared/repository/fixtures/fake-poll-question';

export default {
  title: 'Components / Poll / Question',
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
      PollQuestion
    },
    data() {
      return {
        question: fakePollQuestion()
      };
    },
    template: `
      <div style="padding: 20px;">
        <poll-question :question="question" />
      </div>
    `
  };
};

Default.parameters = {
  viewport: {
    defaultViewport: 'ipad'
  }
};
