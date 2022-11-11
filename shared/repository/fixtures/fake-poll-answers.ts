import { PollQuestionAnswer, PollQuestionTypes } from '~/components/poll/model';

export const fakePollAnswer = (params: Partial<PollQuestionAnswer> = {}): PollQuestionAnswer => {
  return {
    text: '',
    type: PollQuestionTypes.text,
    image: null,
    emoji: null,
    ...params
  };
};

export const fakePollAnswerByImage = (params: Partial<PollQuestionAnswer> = {}): PollQuestionAnswer => {
  return fakePollAnswer({
    type: PollQuestionTypes.image,
    ...params
  });
};

export const fakePollAnswerByImageText = (params: Partial<PollQuestionAnswer> = {}): PollQuestionAnswer => {
  return fakePollAnswer({
    type: PollQuestionTypes.imageText,
    ...params
  });
};

export const fakePollAnswerByEmoji = (params: Partial<PollQuestionAnswer> = {}): PollQuestionAnswer => {
  return fakePollAnswer({
    type: PollQuestionTypes.emoji,
    ...params
  });
};

export const fakePollAnswers = (): PollQuestionAnswer[] => {
  return [
    fakePollAnswer()
  ];
};
