import { RoutesName } from './routes-name';
import { Routes } from '../constants';

type UserRoutes = Pick<Routes,
  RoutesName.user |
  RoutesName.userId
>

enum UserRoutesTitle {
  user = 'Пользователь'
}

export const userRoutes: UserRoutes = {
  [RoutesName.user]: {
    name: RoutesName.user,
    meta: {
      title: UserRoutesTitle.user
    }
  },
  [RoutesName.userId]: {
    name: RoutesName.userId,
    meta: {
      title: UserRoutesTitle.user
    }
  }
};
