import { withDesign } from 'storybook-addon-designs';
import { Component } from 'vue';
import { PollBlock } from './index';
import { fakeUserPopularPoll } from '~/shared/repository/fixtures/fake-user-popular-polls';

export default {
  title: 'Components / Poll',
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
      PollBlock
    },
    data() {
      return {
        poll: fakeUserPopularPoll()
      };
    },
    template: `
      <div style="padding: 20px;">
        <poll-block :poll="poll" />
      </div>
    `
  };
}
