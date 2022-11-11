import { withDesign } from 'storybook-addon-designs';
import { Component } from 'vue';
import { PollQuestionFooter } from './index';
import { PollQuestionFooterView } from './component';

export default {
  title: 'Components / Poll / Question / Footer',
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url: ''
    }
  }
};

export const DefaultView = (): Component => create();
export const ListView = (): Component => create(PollQuestionFooterView.list);

function create(view = PollQuestionFooterView.default): Component {
  return {
    components: {
      PollQuestionFooter
    },
    data() {
      return {
        view
      };
    },
    template: `
      <div style="padding: 20px;">
        <poll-question-footer :view="view" />
      </div>
    `
  };
}
