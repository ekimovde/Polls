import { withDesign } from 'storybook-addon-designs';
import { Component } from 'vue';
import { PollAnswer } from './index';

export default {
  title: 'Components / Poll / Answer',
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
      PollAnswer
    },
    template: `
      <div style="
        display: flex;
        jusitfy-content: center;
        align-items: center;
        padding: 20px;
      ">
        <poll-answer />
      </div>
    `
  };
};
