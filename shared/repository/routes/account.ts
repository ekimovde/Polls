import { RoutesName } from './routes-name';
import { Routes } from '../constants';

type AccountRoutes = Pick<Routes,
  RoutesName.accountProfile |
  RoutesName.accountProfilePassword
>

enum UserRoutesTitle {
  account = 'Аккаунт'
}

export const accountRoutes: AccountRoutes = {
  [RoutesName.accountProfile]: {
    name: RoutesName.accountProfile,
    meta: {
      title: UserRoutesTitle.account
    }
  },
  [RoutesName.accountProfilePassword]: {
    name: RoutesName.accountProfilePassword,
    meta: {
      title: UserRoutesTitle.account
    }
  }
};
