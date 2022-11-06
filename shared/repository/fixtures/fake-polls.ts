import { PollResponse } from '../repo';
import { PollCategory } from '../constants';
import { SharedColorTheme } from '~/components/shared/color/component';

export const fakePoll = (params: Partial<PollResponse> = {}): PollResponse => {
  return {
    id: 1,
    name: 'Test',
    color: SharedColorTheme.green,
    category: PollCategory.animals,
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
