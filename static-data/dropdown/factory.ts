import { DropdownItemBase, DropdownItemTypeBase } from '~/shared/repository/constants';
import { RoutesName } from '~/shared/repository/routes/routes-name';

export const dropdownItem = (params: Partial<DropdownItemBase> = {}): DropdownItemBase => {
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
      dropdownItem()
    ],
    [
      dropdownItem({
        title: 'Manage team'
      }),
      dropdownItem({
        title: 'My Polls',
        routeName: RoutesName.pollsMy
      }),
      dropdownItem({
        title: 'My Votes',
        routeName: RoutesName.votesMy
      })
    ],
    [
      dropdownItem({
        title: 'Edit Profile',
        routeName: RoutesName.accountProfile
      }),
      dropdownItem({
        title: 'Logout',
        type: DropdownItemTypeBase.regular
      })
    ]
  ];
};

export const pollSettingsDropdownList = (): DropdownItemBase[][] => {
  return [
    [
      dropdownItem({
        title: 'Invite to poll',
        routeName: RoutesName.pollInviteId,
        type: DropdownItemTypeBase.default
      })
    ],
    [
      dropdownItem({
        title: 'Poll settings',
        routeName: RoutesName.pollSettingsId,
        type: DropdownItemTypeBase.default
      }),
      dropdownItem({
        title: 'Manage poll members',
        routeName: RoutesName.pollMembersId,
        type: DropdownItemTypeBase.default
      })
    ],
    [
      dropdownItem({
        title: 'Delete poll',
        routeName: RoutesName.index,
        type: DropdownItemTypeBase.regular
      })
    ]
  ];
};
