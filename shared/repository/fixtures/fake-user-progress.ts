import { UserProgressResponse } from '../repo';
import { UserProgressValue } from '~/components/progress/model';

export const fakeUserProgress = (params: Partial<UserProgressValue> = {}): UserProgressValue => {
  return {
    count: 12,
    total: 100,
    ...params
  };
};

export const fakeUserProgressResponse = (): UserProgressResponse => {
  return {
    created: fakeUserProgress(),
    consists: fakeUserProgress({
      count: 5
    }),
    participation: fakeUserProgress({
      count: 2
    })
  };
};
