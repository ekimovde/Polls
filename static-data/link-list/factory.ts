import { RouteItemBase } from '~/shared/repository/constants';
import { RoutesName } from '~/shared/repository/routes/routes-name';

export const linkListItem = (params: Partial<RouteItemBase> = {}): RouteItemBase => {
  return {
    title: 'Изменить пароль',
    routeName: RoutesName.accountProfilePassword,
    ...params
  };
};

export const linkList = (): RouteItemBase[] => {
  return [
    linkListItem()
  ];
};
