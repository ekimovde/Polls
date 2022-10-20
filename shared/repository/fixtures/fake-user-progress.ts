import { UserProgressResponse } from '../repo';
import { UiProgressTheme } from '~/components/ui/progress/component';

export const fakeUserProgressItem = (params: Partial<UserProgressResponse> = {}): UserProgressResponse => {
  return {
    title: 'Participation',
    value: 12,
    description: '0 of 1 team members attended a standup',
    theme: UiProgressTheme.green,
    ...params
  };
};

export const fakeUserProgress = (): UserProgressResponse[] => {
  return [
    fakeUserProgressItem(),
    fakeUserProgressItem({
      title: 'Goals',
      value: 0,
      description: '0 of 1 team members met their goals',
      theme: UiProgressTheme.purple
    }),
    fakeUserProgressItem({
      title: 'Blocked',
      value: 15,
      description: '0 of 1 team members are blocked',
      theme: UiProgressTheme.red
    })
  ];
};
