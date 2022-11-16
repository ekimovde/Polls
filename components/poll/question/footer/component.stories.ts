import { withDesign } from 'storybook-addon-designs';
import { Component } from 'vue';
import { PollQuestionFooter } from './index';
import { PollQuestionFooterView } from './component';
import { PollQuestionTypes } from '../../model';

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
        view,
        questionType: PollQuestionTypes.text,
        isQuestionHidden: false,
        isMultipleAnswers: false,
        ownImage: null
      };
    },
    template: `
      <div style="padding: 20px;">
        <poll-question-footer
          :view="view"
          :question-type="questionType"
          :is-question-hidden="isQuestionHidden"
          :is-multiple-answers="isMultipleAnswers"
          :own-image="ownImage"
        />
      </div>
    `
  };
}
