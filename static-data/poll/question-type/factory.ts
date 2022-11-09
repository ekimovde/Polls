import { PollQuestionTypeOption } from '~/components/poll/question/type/component';
import { PollQuestionType } from '~/components/poll/model';

export const pollQuestionTypeOption = (params: Partial<PollQuestionTypeOption> = {}): PollQuestionTypeOption => {
  return {
    icon: require('@assets/svg/text.svg'),
    title: 'Варианты ответов',
    type: PollQuestionType.text,
    ...params
  };
};

export const pollQuestionTypeOptions = (): PollQuestionTypeOption[] => {
  return [
    pollQuestionTypeOption(),
    pollQuestionTypeOption({
      icon: require('@assets/svg/images.svg'),
      title: 'Варианты с картинками',
      type: PollQuestionType.image
    }),
    pollQuestionTypeOption({
      icon: require('@assets/svg/image-text.svg'),
      title: 'Варианты и картинка',
      type: PollQuestionType.imageText
    }),
    pollQuestionTypeOption({
      icon: require('@assets/svg/emoji.svg'),
      title: 'Эмоджи',
      type: PollQuestionType.emoji
    })
  ];
};
