import { RoutesName } from './routes-name';
import { Routes } from '../constants';

type AuthRoutes = Pick<Routes,
  RoutesName.authLogin |
  RoutesName.authRegistration
>

enum UserRoutesTitle {
  login = 'Вход',
  registration = 'Регистрация'
}

export const authRoutes: AuthRoutes = {
  [RoutesName.authLogin]: {
    name: RoutesName.authLogin,
    meta: {
      title: UserRoutesTitle.login
    }
  },
  [RoutesName.authRegistration]: {
    name: RoutesName.authRegistration,
    meta: {
      title: UserRoutesTitle.registration
    }
  }
};
