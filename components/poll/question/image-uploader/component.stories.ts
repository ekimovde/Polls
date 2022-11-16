import { withDesign } from 'storybook-addon-designs';
import { Component } from 'vue';
import { PollQuestionImageUploader } from './index';

export default {
  title: 'Components / Poll / Question / ImageUploader',
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
      PollQuestionImageUploader
    },
    data() {
      return {
        ownImage: ''
      };
    },
    template: `
      <div style="
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
      ">
        <poll-question-image-uploader :own-image.sync="ownImage" />
      </div>
    `
  };
}
