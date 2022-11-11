import { withDesign } from 'storybook-addon-designs';
import { Component } from 'vue';
import { PollQuestionSettings } from './index';

export default {
  title: 'Components / Poll / Question / Settings',
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
      PollQuestionSettings
    },
    template: `
      <div style="
        display: flex;
        jusitfy-content: center;
        align-items: center;
        padding: 20px;
      ">
        <poll-question-settings />
      </div>
    `
  };
};
