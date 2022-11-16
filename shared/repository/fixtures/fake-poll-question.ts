import { PollQuestionResponse } from '~/components/poll/model';

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
