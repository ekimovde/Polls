import { withDesign } from 'storybook-addon-designs';
import { Component } from 'vue';
import { PollQuestionCounter } from './index';
import { DEFAULT_COUNT } from './component';

export default {
  title: 'Components / Poll / Question / Counter',
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
      PollQuestionCounter
    },
    data() {
      return {
        count: DEFAULT_COUNT
      };
    },
    template: `
      <div style="
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
      ">
        <poll-question-counter :count="count" />
      </div>
    `
  };
};
