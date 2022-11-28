import { withDesign } from 'storybook-addon-designs';
import { Component } from 'vue';
import { PollVoteInfo } from './index';
import { fakePollQuestion } from '~/shared/repository/fixtures/fake-poll-question';

export default {
  title: 'Components / Poll / Vote / Info',
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
      PollVoteInfo
    },
    data() {
      return {
        question: fakePollQuestion()
      };
    },
    template: `
      <div style="padding: 20px;">
        <poll-vote-info :question="question" />
      </div>
    `
  };
}
