import { withDesign } from 'storybook-addon-designs';
import { Component } from 'vue';
import { ReactionsBlock } from './index';
import { fakeReactions } from '~/shared/repository/fixtures/fake-reactions';

export default {
  title: 'Components / Reactions',
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
      ReactionsBlock
    },
    data() {
      return {
        reactions: fakeReactions()
      };
    },
    template: `
      <div style="
        padding: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
      ">
        <reactions-block :reactions="reactions" />
      </div>
    `
  };
}
