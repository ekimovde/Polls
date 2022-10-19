import { RoutesName } from './routes-name';
import { Routes } from '../constants';
import { userRoutes } from './user';
import { authRoutes } from './auth';
import { pollRoutes } from './poll';

export const routes: Routes = {
  [RoutesName.index]: {
    name: RoutesName.index
  },
  [RoutesName.dashboard]: {
    name: RoutesName.dashboard
  },
  [RoutesName.myVotes]: {
    name: RoutesName.myVotes
  },
  ...userRoutes,
  ...authRoutes,
  ...pollRoutes
};
