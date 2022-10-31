import { SelfInfoResponse } from '../repo';

export const fakeSelfInfo = (params: Partial<SelfInfoResponse> = {}): SelfInfoResponse => {
  return {
    id: 1,
    firstName: 'Denis',
    lastName: 'Ekimov',
    fullName: 'Denis Ekimov',
    nickName: 'ekimov_de',
    email: 'ekimov_de@mail.ru',
    ...params
  };
};
