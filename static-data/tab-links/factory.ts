import { RouteItemBase } from '~/shared/repository/constants';
import { RoutesName } from '~/shared/repository/routes/routes-name';

export const tabLink = (params: Partial<RouteItemBase> = {}): RouteItemBase => {
  return {
    title: 'Главная',
    routeName: RoutesName.pollId,
    ...params
  };
};

export const tabLinks = (): RouteItemBase[] => {
  return [
    tabLink()
  ];
};
