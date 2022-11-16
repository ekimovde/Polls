import { PollMembersResponse } from '../repo';

export const fakePollMember = (params: Partial<PollMembersResponse> = {}): PollMembersResponse => {
  return {
    id: 1,
    fullName: 'Denis Ekimov',
    avatar: '',
    ...params
  };
};

export const fakePollMembers = (): PollMembersResponse[] => {
  return [
    fakePollMember(),
    fakePollMember({
      id: 2,
      fullName: 'Vadim Ekimov'
    })
  ];
};
