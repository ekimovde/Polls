import { withDesign } from 'storybook-addon-designs';
import { Component } from 'vue';
import { PollVote } from './index';
import { fakePollQuestionWithAnswers } from '~/shared/repository/fixtures/fake-poll-question';
import { fakePollAnswerByImage, fakePollAnswerByImageText } from '~/shared/repository/fixtures/fake-poll-answers';
import { PollQuestionTypes } from '../model';
import { SharedColorTheme } from '~/components/shared/color/component';

export default {
  title: 'Components / Poll / Vote',
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url: ''
    }
  }
};

export const ByTextType = (): Component => create();
export const ByImageType = (): Component => create({
  question: fakePollQuestionWithAnswers({
    type: PollQuestionTypes.image,
    answers: [fakePollAnswerByImage({
      image: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMzcyMjd8MHwxfHNlYXJjaHw5fHxjYXJ8ZW58MHx8fHwxNjY5NjY5NDE1&ixlib=rb-4.0.3&q=80&w=400'
    })]
  })
});
export const ByImageTextType = (): Component => create({
  question: fakePollQuestionWithAnswers({
    type: PollQuestionTypes.imageText,
    answers: [fakePollAnswerByImageText({
      image: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMzcyMjd8MHwxfHNlYXJjaHw5fHxjYXJ8ZW58MHx8fHwxNjY5NjY5NDE1&ixlib=rb-4.0.3&q=80&w=400'
    })]
  })
});

function create(props = {}): Component {
  return {
    components: {
      PollVote
    },
    data() {
      return {
        question: fakePollQuestionWithAnswers(),
        pollVoteResults: null,
        color: SharedColorTheme.blue,
        isLoading: false,
        isPollEnded: false,
        ...props
      };
    },
    template: `
      <div style="padding: 20px;">
        <poll-vote
          :question="question"
          :poll-vote-results="pollVoteResults"
          :color="color"
          :is-loading="isLoading"
          :is-poll-ended="isPollEnded"
        />
      </div>
    `
  };
};

const stories = [
  ByTextType,
  ByImageType,
  ByImageTextType
];

stories.forEach(item => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  item.parameters = {
    viewport: {
      defaultViewport: 'ipadMax'
    }
  };
});
