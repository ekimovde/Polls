import { PollQuestionResponse } from '~/components/poll/model';
import { fakePollAnswerWithText } from './fake-poll-answers';

export const fakePollQuestion = (params: Partial<PollQuestionResponse> = {}): PollQuestionResponse => {
  return {
    name: '',
    type: null,
    answers: [],
    settings: {
      isMultipleAnswers: false,
      ownImage: null
    },
    ...params
  };
};

export const fakePollQuestionWithAnswers = (params: Partial<PollQuestionResponse> = {}): PollQuestionResponse => {
  return fakePollQuestion({
    name: 'Text',
    answers: [
      fakePollAnswerWithText()
    ],
    ...params
  });
};
