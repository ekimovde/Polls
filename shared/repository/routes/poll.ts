import { RoutesName } from './routes-name';
import { Routes } from '../constants';

type PollRoutes = Pick<Routes,
  RoutesName.pollId |
  RoutesName.pollNew |
  RoutesName.pollSettingsId |
  RoutesName.pollInviteId
>

enum PollRoutesTitle {
  poll = 'Опрос'
}

export const pollRoutes: PollRoutes = {
  [RoutesName.pollId]: {
    name: RoutesName.pollId,
    meta: {
      title: PollRoutesTitle.poll
    }
  },
  [RoutesName.pollNew]: {
    name: RoutesName.pollNew,
    meta: {
      title: PollRoutesTitle.poll
    }
  },
  [RoutesName.pollSettingsId]: {
    name: RoutesName.pollSettingsId,
    meta: {
      title: PollRoutesTitle.poll
    }
  },
  [RoutesName.pollInviteId]: {
    name: RoutesName.pollInviteId,
    meta: {
      title: PollRoutesTitle.poll
    }
  }
};
