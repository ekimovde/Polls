import { RouteItemBase } from '~/shared/repository/constants';
import { RoutesName } from '~/shared/repository/routes/routes-name';

export const navigationItem = (params: Partial<RouteItemBase> = {}): RouteItemBase => {
  return {
    title: 'Dashboard',
    routeName: RoutesName.dashboard,
    ...params
  };
};

export const navigations = (): RouteItemBase[] => {
  return [
    navigationItem(),
    navigationItem({
      title: 'Polls',
      routeName: RoutesName.polls
    })
  ];
};

export const navigationsForIndexPage = (): RouteItemBase[] => {
  return [
    navigationItem({
      title: 'Home',
      routeName: RoutesName.index
    }),
    navigationItem({
      title: 'Features',
      routeName: RoutesName.index
    })
  ];
};
