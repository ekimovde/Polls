import { RoutesName } from './routes-name';
import { Routes } from '../constants';

type PollsRoutes = Pick<Routes,
  RoutesName.polls |
  RoutesName.pollsMy
>

enum PollsRoutesTitle {
  polls = 'Опросы'
}

export const pollsRoutes: PollsRoutes = {
  [RoutesName.polls]: {
    name: RoutesName.polls,
    meta: {
      title: PollsRoutesTitle.polls
    }
  },
  [RoutesName.pollsMy]: {
    name: RoutesName.pollsMy,
    meta: {
      title: PollsRoutesTitle.polls
    }
  }
};
