import { withDesign } from 'storybook-addon-designs';
import { Component } from 'vue';
import { PollQuestionHelp } from './index';

export default {
  title: 'Components / Poll / Question / Help',
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
      PollQuestionHelp
    },
    template: `
      <div style="padding: 20px;">
        <poll-question-help />
      </div>
    `
  };
}
