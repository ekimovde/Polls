import { withDesign } from 'storybook-addon-designs';
import { Component } from 'vue';
import { PollQuestionType } from './index';
import { pollQuestionTypeOption } from '~/static-data/poll/question-type/factory';
import { PollQuestionTypeView } from './component';

export default {
  title: 'Components / Poll / Question / Type',
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url: ''
    }
  }
};

export const DefaultView = (): Component => create();
export const CardView = (): Component => create({ view: PollQuestionTypeView.card });
export const IsActive = (): Component => create({ isActive: true });
export const HasIcon = (): Component => create({ hasIcon: true });

function create(props = {}): Component {
  return {
    components: {
      PollQuestionType
    },
    data() {
      return {
        view: PollQuestionTypeView.default,
        option: pollQuestionTypeOption(),
        isActive: false,
        hasIcon: false,
        ...props
      };
    },
    template: `
      <div style="
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
      ">
        <poll-question-type
          :view="view"
          :option="option"
          :is-active="isActive"
          :has-icon="hasIcon"
        />
      </div>
    `
  };
};
