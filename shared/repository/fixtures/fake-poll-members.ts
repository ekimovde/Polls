import { PollMembersResponse } from '../repo';

export const fakePollMember = (params: Partial<PollMembersResponse> = {}): PollMembersResponse => {
  return {
    id: 1,
    avatar: '',
    name: 'Denis Ekimov',
    role: 'JavaScript',
    ...params
  };
};

export const fakePollMembers = (): PollMembersResponse[] => {
  return [
    fakePollMember(),
    fakePollMember({
      id: 2,
      name: 'Vadim Ekimov',
      role: 'Vue'
    })
  ];
};
