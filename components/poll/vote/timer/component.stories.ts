import { withDesign } from 'storybook-addon-designs';
import { Component } from 'vue';
import { PollVoteTimer } from './index';

export default {
  title: 'Components / Poll / Vote / Timer',
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
      PollVoteTimer
    },
    template: `
      <div style="padding: 20px;">
        <poll-vote-timer />
      </div>
    `
  };
}
