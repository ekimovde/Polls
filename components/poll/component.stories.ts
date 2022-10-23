import { withDesign } from 'storybook-addon-designs';
import { Component } from 'vue';
import { PollBlock } from './index';
import { PollBlockView } from './component';
import { fakePoll } from '~/shared/repository/fixtures/fake-polls';

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

export const DefaultView = (): Component => create();
export const RegularView = (): Component => create(PollBlockView.regular);

function create(view = PollBlockView.default): Component {
  return {
    components: {
      PollBlock
    },
    data() {
      return {
        poll: fakePoll(),
        view
      };
    },
    template: `
      <div style="padding: 20px;">
        <poll-block
          :poll="poll"
          :view="view"
        />
      </div>
    `
  };
}
