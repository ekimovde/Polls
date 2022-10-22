import { DropdownItemBase, DropdownItemTypeBase } from '~/shared/repository/constants';
import { RoutesName } from '~/shared/repository/routes/routes-name';

export const accountDropdownItem = (params: Partial<DropdownItemBase> = {}): DropdownItemBase => {
  return {
    title: 'Invite team admins',
    routeName: RoutesName.index,
    type: DropdownItemTypeBase.default,
    ...params
  };
};

export const accountDropdownList = (): DropdownItemBase[][] => {
  return [
    [
      accountDropdownItem()
    ],
    [
      accountDropdownItem({
        title: 'Manage team'
      }),
      accountDropdownItem({
        title: 'Plans'
      }),
      accountDropdownItem({
        title: 'Company details'
      })
    ],
    [
      accountDropdownItem({
        title: 'Edit Profile',
        routeName: RoutesName.accountProfile
      }),
      accountDropdownItem({
        title: 'Logout',
        type: DropdownItemTypeBase.logout
      })
    ]
  ];
};
