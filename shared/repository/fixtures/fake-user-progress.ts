import { UserProgressResponse } from '../repo';

export const fakeUserProgressItem = (params: Partial<UserProgressResponse> = {}): UserProgressResponse => {
  return {
    title: 'Participation',
    value: 12,
    description: '0 of 1 team members attended a standup',
    ...params
  };
};

export const fakeUserProgress = (): UserProgressResponse[] => {
  return [
    fakeUserProgressItem(),
    fakeUserProgressItem({
      title: 'Goals',
      value: 0,
      description: '0 of 1 team members met their goals'
    }),
    fakeUserProgressItem({
      title: 'Blocked',
      value: 15,
      description: '0 of 1 team members are blocked'
    })
  ];
};
