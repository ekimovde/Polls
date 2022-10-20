import { RoutesName } from './routes-name';
import { Routes } from '../constants';

type PollRoutes = Pick<Routes,
  RoutesName.pollMy |
  RoutesName.pollNew |
  RoutesName.pollResult |
  RoutesName.pollSettings
>

enum UserRoutesTitle {
  poll = 'Опрос'
}

export const pollRoutes: PollRoutes = {
  [RoutesName.pollMy]: {
    name: RoutesName.pollMy,
    meta: {
      title: UserRoutesTitle.poll
    }
  },
  [RoutesName.pollNew]: {
    name: RoutesName.pollNew,
    meta: {
      title: UserRoutesTitle.poll
    }
  },
  [RoutesName.pollResult]: {
    name: RoutesName.pollResult,
    meta: {
      title: UserRoutesTitle.poll
    }
  },
  [RoutesName.pollSettings]: {
    name: RoutesName.pollSettings,
    meta: {
      title: UserRoutesTitle.poll
    }
  }
};
