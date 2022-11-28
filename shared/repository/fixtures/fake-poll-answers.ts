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

export const fakePollAnswerWithText = (params: Partial<PollQuestionAnswer> = {}): PollQuestionAnswer => {
  return fakePollAnswer({ text: 'Text', timestamp: 124124, ...params });
};

export const fakePollAnswerByImage = (params: Partial<PollQuestionAnswer> = {}): PollQuestionAnswer => {
  return fakePollAnswerWithText({
    type: PollQuestionTypes.image,
    ...params
  });
};

export const fakePollAnswerByImageText = (params: Partial<PollQuestionAnswer> = {}): PollQuestionAnswer => {
  return fakePollAnswerWithText({
    type: PollQuestionTypes.imageText,
    ...params
  });
};

export const fakePollAnswerByEmoji = (params: Partial<PollQuestionAnswer> = {}): PollQuestionAnswer => {
  return fakePollAnswerWithText({
    type: PollQuestionTypes.emoji,
    ...params
  });
};

export const fakePollAnswers = (): PollQuestionAnswer[] => {
  return [
    fakePollAnswerWithText()
  ];
};
