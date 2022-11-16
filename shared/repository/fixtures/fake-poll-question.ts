import { PollQuestionResponse, PollQuestionTypes } from '~/components/poll/model';

export const fakePollQuestion = (params: Partial<PollQuestionResponse> = {}): PollQuestionResponse => {
  return {
    name: '',
    type: PollQuestionTypes.text,
    answers: [],
    settings: {
      isMultipleAnswers: false
    },
    ...params
  };
};
