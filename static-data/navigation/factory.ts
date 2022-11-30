import { RouteItemBase } from '~/shared/repository/constants';
import { RoutesName } from '~/shared/repository/routes/routes-name';

export const navigationItem = (params: Partial<RouteItemBase> = {}): RouteItemBase => {
  return {
    title: 'Панель',
    routeName: RoutesName.dashboard,
    ...params
  };
};

export const navigations = (): RouteItemBase[] => {
  return [
    navigationItem(),
    navigationItem({
      title: 'Опросы',
      routeName: RoutesName.polls
    })
  ];
};

export const navigationsForIndexPage = (): RouteItemBase[] => {
  return [
    navigationItem({
      title: 'Главная',
      routeName: RoutesName.index
    }),
    navigationItem({
      title: 'Особенности',
      routeName: RoutesName.index
    })
  ];
};
