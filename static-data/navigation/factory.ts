import { RouteItemBase } from '~/shared/repository/constants';
import { RoutesName } from '~/shared/repository/routes/routes-name';

export const navigationItem = (params: Partial<RouteItemBase> = {}): RouteItemBase => {
  return {
    title: 'Dashboard',
    routeName: RoutesName.index,
    ...params
  };
};

export const navigations = (): RouteItemBase[] => {
  return [
    navigationItem(),
    navigationItem({
      title: 'My Polls',
      routeName: RoutesName.pollMy
    }),
    navigationItem({
      title: 'My Votes',
      routeName: RoutesName.myVotes
    })
  ];
};
