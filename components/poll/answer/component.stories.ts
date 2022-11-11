import { withDesign } from 'storybook-addon-designs';
import { Component } from 'vue';
import { PollAnswer } from './index';
import { fakePollAnswer, fakePollAnswerByImage, fakePollAnswerByImageText, fakePollAnswerByEmoji } from '~/shared/repository/fixtures/fake-poll-answers';

export default {
  title: 'Components / Poll / Answer',
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url: ''
    }
  }
};

export const TextType = (): Component => create();
export const ImageType = (): Component => create({ answer: fakePollAnswerByImage() });
export const ImageTextType = (): Component => create({ answer: fakePollAnswerByImageText() });
export const EmojiType = (): Component => create({ answer: fakePollAnswerByEmoji() });

function create(params = {}): Component {
  return {
    components: {
      PollAnswer
    },
    data() {
      return {
        answer: fakePollAnswer(),
        ...params
      };
    },
    template: `
      <div style="
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
      ">
        <poll-answer :answer="answer" />
      </div>
    `
  };
};
