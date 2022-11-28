import { PollResponse } from '../repo';
import { PollCategory } from '../constants';
import { SharedColorTheme } from '~/components/shared/color/component';
import { PollQuestionDate, PollQuestionTime, PollAuthor } from '~/components/poll/model';
import { fakePollQuestion } from './fake-poll-question';
import { fakePollMembers } from './fake-poll-members';
import { fakePollVote } from './fake-poll-vote';

export const fakePollDate = (params: Partial<PollQuestionDate> = {}): PollQuestionDate => {
  return {
    month: 1,
    day: 12,
    ...params
  };
};

export const fakePollTime = (params: Partial<PollQuestionTime> = {}): PollQuestionTime => {
  return {
    hour: 1,
    minute: 30,
    ...params
  };
};

export const fakePollAuthor = (params: Partial<PollAuthor> = {}): PollAuthor => {
  return {
    id: 1,
    fullName: 'Ekimov Denis',
    avatar: '',
    ...params
  };
};

export const fakePoll = (params: Partial<PollResponse> = {}): PollResponse => {
  return {
    id: 1,
    name: 'Test',
    color: SharedColorTheme.green,
    category: PollCategory.animals,
    question: fakePollQuestion(),
    date: fakePollDate(),
    time: fakePollTime(),
    author: fakePollAuthor(),
    members: fakePollMembers(),
    vote: fakePollVote(),
    isPublic: true,
    userId: 2,
    created: '2022.10.21 01:35',
    updated: '2022.10.21 01:35',
    ...params
  };
};

export const fakePolls = (): PollResponse[] => {
  return [
    fakePoll(),
    fakePoll({
      id: 2,
      color: SharedColorTheme.orange,
      category: PollCategory.webDesign,
      userId: 3
    })
  ];
};
