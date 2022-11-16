import { withDesign } from 'storybook-addon-designs';
import { Component } from 'vue';
import { UploadPicture } from './index';

export default {
  title: 'Components / UploadPicture',
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
      UploadPicture
    },
    data() {
      return {
        avatar: ''
      };
    },
    template: `
      <div style="padding: 20px;">
        <upload-picture :avatar="avatar" />
      </div>
    `
  };
}
