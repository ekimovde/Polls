import { PollQuestionTypeOption } from '~/components/poll/question/type/component';
import { PollQuestionTypes } from '~/components/poll/model';

export const pollQuestionTypeOption = (params: Partial<PollQuestionTypeOption> = {}): PollQuestionTypeOption => {
  return {
    icon: require('@assets/svg/text.svg'),
    title: 'Варианты ответов',
    type: PollQuestionTypes.text,
    ...params
  };
};

export const pollQuestionTypeOptions = (): PollQuestionTypeOption[] => {
  return [
    pollQuestionTypeOption(),
    pollQuestionTypeOption({
      icon: require('@assets/svg/images.svg'),
      title: 'Варианты с картинками',
      type: PollQuestionTypes.image
    }),
    pollQuestionTypeOption({
      icon: require('@assets/svg/image-text.svg'),
      title: 'Варианты и картинка',
      type: PollQuestionTypes.imageText
    }),
    pollQuestionTypeOption({
      icon: require('@assets/svg/emoji.svg'),
      title: 'Эмоджи',
      type: PollQuestionTypes.emoji
    })
  ];
};
