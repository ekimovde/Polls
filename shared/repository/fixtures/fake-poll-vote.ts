import { PollVoteParams, PollVoteAnswer, PollAuthor, PollVoteProgress } from '~/components/poll/model';

export const fakePollVoteAuthor = (params: Partial<PollAuthor> = {}): PollAuthor => {
  return {
    id: 1,
    fullName: 'Ekimov Denis',
    avatar: '',
    ...params
  };
};

export const fakePollVoteAnswer = (params: Partial<PollVoteAnswer> = {}): PollVoteAnswer => {
  return {
    text: 'Python',
    timestamp: 1,
    authors: [
      fakePollVoteAuthor(),
      fakePollVoteAuthor({
        id: 2,
        fullName: 'Ekimov Vadim'
      })
    ],
    ...params
  };
};

export const fakePollVoteAnswers = (): PollVoteAnswer[] => {
  return [
    fakePollVoteAnswer(),
    fakePollVoteAnswer({
      text: 'JavaScript',
      timestamp: 2,
      authors: [
        fakePollVoteAuthor({
          id: 3,
          fullName: 'Ekimov Vlad'
        })
      ]
    }),
    fakePollVoteAnswer({
      text: 'Go',
      timestamp: 3,
      authors: [
        fakePollVoteAuthor({
          id: 4,
          fullName: 'Ekimov Dmitriy'
        })
      ]
    })
  ];
};

export const fakePollVoteProgress = (params: Partial<PollVoteProgress> = {}): PollVoteProgress => {
  return {
    1: 50,
    2: 30,
    3: 20,
    ...params
  };
};

export const fakePollVote = (): PollVoteParams => {
  return {
    total: 3,
    answers: fakePollVoteAnswers(),
    progress: fakePollVoteProgress()
  };
};
