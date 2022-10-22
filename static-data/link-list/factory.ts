import { RouteItemBase } from '~/shared/repository/constants';
import { RoutesName } from '~/shared/repository/routes/routes-name';

export const linkListItem = (params: Partial<RouteItemBase> = {}): RouteItemBase => {
  return {
    title: 'Timezone',
    routeName: RoutesName.accountProfile,
    ...params
  };
};

export const linkList = (): RouteItemBase[] => {
  return [
    linkListItem(),
    linkListItem({
      title: 'Change Password',
      routeName: RoutesName.accountProfilePassword
    })
  ];
};
