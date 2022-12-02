import { PollVoteResults, PollAuthor, PollVoteProgress, PollQuestionAnswer, PollQuestionTypes } from '~/components/poll/model';
import { fakePollAnswer } from './fake-poll-answers';
import { fakePollAuthor } from './fake-polls';

export const fakePollVoteAuthor = (params: Partial<PollAuthor> = {}): PollAuthor => {
  return {
    id: 1,
    fullName: 'Ekimov Denis',
    avatar: '',
    ...params
  };
};

export const fakePollVoteAnswers = (): PollQuestionAnswer[] => {
  return [
    fakePollAnswer({
      timestamp: 1,
      text: 'Python',
      type: PollQuestionTypes.text
    }),
    fakePollAnswer({
      timestamp: 2,
      text: 'JavaScript',
      type: PollQuestionTypes.text
    }),
    fakePollAnswer({
      timestamp: 3,
      text: 'PHP',
      type: PollQuestionTypes.text
    }),
    fakePollAnswer({
      timestamp: 4,
      text: 'Go',
      type: PollQuestionTypes.text
    })
  ];
};

export const fakePollVoteProgress = (params: Partial<PollVoteProgress> = {}): PollVoteProgress => {
  return {
    1: 25,
    2: 50,
    3: 0,
    4: 25,
    ...params
  };
};

export const fakePollVoteUsers = (): PollAuthor[] => {
  return [
    fakePollAuthor(),
    fakePollAuthor({
      id: 2,
      fullName: 'Ekimov Vadim'
    }),
    fakePollAuthor({
      id: 3,
      fullName: 'Ekimov Vlad'
    }),
    fakePollAuthor({
      id: 4,
      fullName: 'Ekimova Eleonora'
    })
  ];
};

export const fakePollVoteResults = (): PollVoteResults => {
  return {
    total: 4,
    answers: fakePollVoteAnswers(),
    progress: fakePollVoteProgress(),
    users: fakePollVoteUsers(),
    selectedAnswer: 1
  };
};
