import { RoutesName } from './routes-name';
import { Routes } from '../constants';

type AuthRoutes = Pick<Routes,
  RoutesName.auth |
  RoutesName.authRegistration
>

enum UserRoutesTitle {
  auth = 'Вход',
  registration = 'Регистрация'
}

export const authRoutes: AuthRoutes = {
  [RoutesName.auth]: {
    name: RoutesName.auth,
    meta: {
      title: UserRoutesTitle.auth
    }
  },
  [RoutesName.authRegistration]: {
    name: RoutesName.authRegistration,
    meta: {
      title: UserRoutesTitle.registration
    }
  }
};
