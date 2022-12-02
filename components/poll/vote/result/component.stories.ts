import { withDesign } from 'storybook-addon-designs';
import { Component } from 'vue';
import { PollVoteResult } from './index';
import { fakePollVoteResults } from '~/shared/repository/fixtures/fake-poll-vote';
import { userRepo } from '~/shared/repository/fake-services-factory';
import { fakeSelfInfo } from '~/shared/repository/fixtures/fake-self-info';

export default {
  title: 'Components / Poll / Vote / Result',
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
  userRepo.UPDATE_INFO(fakeSelfInfo());

  return {
    components: {
      PollVoteResult
    },
    data() {
      return {
        pollVoteResults: fakePollVoteResults()
      };
    },
    template: `
      <div style="padding: 20px;">
        <poll-vote-result :poll-vote-results="pollVoteResults" />
      </div>
    `
  };
}
