import { withDesign } from 'storybook-addon-designs';
import { Component } from 'vue';
import { SocialLinks } from './index';

export default {
  title: 'Components / SocialLinks',
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
      SocialLinks
    },
    template: `
      <div style="padding: 20px;">
        <social-links />
      </div>
    `
  };
}
