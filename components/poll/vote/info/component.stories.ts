import { withDesign } from 'storybook-addon-designs';
import { Component } from 'vue';
import { PollVoteInfo } from './index';
import { fakePollVoteResults } from '~/shared/repository/fixtures/fake-poll-vote';

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
        pollVoteResults: fakePollVoteResults()
      };
    },
    template: `
      <div style="padding: 20px;">
        <poll-vote-info :poll-vote-results="pollVoteResults" />
      </div>
    `
  };
}
