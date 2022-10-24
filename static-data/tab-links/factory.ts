import { RouteItemBase } from '~/shared/repository/constants';
import { RoutesName } from '~/shared/repository/routes/routes-name';

export const tabLink = (params: Partial<RouteItemBase> = {}): RouteItemBase => {
  return {
    title: 'Stand-ups',
    routeName: RoutesName.index,
    ...params
  };
};

export const tabLinks = (): RouteItemBase[] => {
  return [
    tabLink(),
    tabLink({
      title: 'Tasks',
      routeName: RoutesName.polls
    })
  ];
};
