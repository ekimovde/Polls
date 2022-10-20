import { UserPopularPollsResponse } from '../repo';
import { PollCategory } from '../constants';
import { SharedColorTheme } from '~/components/shared/color/component';

export const fakeUserPopularPoll = (params: Partial<UserPopularPollsResponse> = {}): UserPopularPollsResponse => {
  return {
    name: 'Test',
    color: SharedColorTheme.green,
    category: PollCategory.animals,
    isPublic: true,
    created: '2022.10.21 01:35',
    updated: '2022.10.21 01:35',
    ...params
  };
};

export const fakeUserPopularPolls = (): UserPopularPollsResponse[] => {
  return [
    fakeUserPopularPoll(),
    fakeUserPopularPoll({
      color: SharedColorTheme.orange,
      category: PollCategory.webDesign
    })
  ];
};
