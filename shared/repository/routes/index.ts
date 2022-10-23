import { RoutesName } from './routes-name';
import { Routes } from '../constants';
import { userRoutes } from './user';
import { authRoutes } from './auth';
import { pollRoutes } from './poll';
import { pollsRoutes } from './polls';
import { accountRoutes } from './account';
import { votesRoutes } from './votes';

export const routes: Routes = {
  [RoutesName.index]: {
    name: RoutesName.index
  },
  [RoutesName.dashboard]: {
    name: RoutesName.dashboard
  },
  ...userRoutes,
  ...authRoutes,
  ...pollRoutes,
  ...pollsRoutes,
  ...accountRoutes,
  ...votesRoutes
};
