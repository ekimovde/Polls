import { RoutesName } from './routes-name';
import { Routes } from '../constants';

type VotesRoutes = Pick<Routes,
  RoutesName.votesMy
>

enum VotesRoutesTitle {
  votes = 'Голоса'
}

export const votesRoutes: VotesRoutes = {
  [RoutesName.votesMy]: {
    name: RoutesName.votesMy,
    meta: {
      title: VotesRoutesTitle.votes
    }
  }
};
