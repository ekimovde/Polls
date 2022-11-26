import { UserProgressResponse } from '../repo';
import { UserProgressValue } from '~/components/progress/model';
import { DEFAULT_COUNT_OF_USER_PROGRESS, DEFAULT_TOTAL_OF_USER_PROGRESS } from '../constants';

export const fakeUserProgress = (params: Partial<UserProgressValue> = {}): UserProgressValue => {
  return {
    count: DEFAULT_COUNT_OF_USER_PROGRESS,
    total: DEFAULT_TOTAL_OF_USER_PROGRESS,
    ...params
  };
};

export const fakeUserProgressResponse = (): UserProgressResponse => {
  return {
    created: fakeUserProgress({ count: 12 }),
    consists: fakeUserProgress({ count: 5 }),
    participation: fakeUserProgress({ count: 2 })
  };
};
