import { withDesign } from 'storybook-addon-designs';
import { Component } from 'vue';
import { PollVoteOption } from './index';
import { fakePollAnswerWithText, fakePollAnswer } from '~/shared/repository/fixtures/fake-poll-answers';
import { PollQuestionTypes } from '../../model';

export default {
  title: 'Components / Poll / Vote / Option',
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url: ''
    }
  }
};

export const TextType = (): Component => create();
export const ImageType = (): Component => create({
  answer: fakePollAnswerWithText({
    type: PollQuestionTypes.image,
    image: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMzcyMjd8MHwxfHNlYXJjaHw5fHxjYXJ8ZW58MHx8fHwxNjY5NjY5NDE1&ixlib=rb-4.0.3&q=80&w=400'
  })
});
export const ImageTextType = (): Component => create({
  answer: fakePollAnswerWithText({ type: PollQuestionTypes.imageText })
});

function create(props = {}): Component {
  return {
    components: {
      PollVoteOption
    },
    data() {
      return {
        answer: fakePollAnswerWithText(),
        selectedAnswer: fakePollAnswer(),
        ownImage: null,
        ...props
      };
    },
    template: `
      <div style="padding: 20px;">
        <poll-vote-option
          :answer="answer"
          :selected-answer.sync="selectedAnswer"
          :own-image="ownImage"
        />
      </div>
    `
  };
}
