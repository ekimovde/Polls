import { DropdownItemBase, DropdownItemTypeBase } from '~/shared/repository/constants';
import { RoutesName } from '~/shared/repository/routes/routes-name';

export const dropdownItem = (params: Partial<DropdownItemBase> = {}): DropdownItemBase => {
  return {
    title: 'Мои опросы',
    routeName: RoutesName.pollsMy,
    type: DropdownItemTypeBase.default,
    ...params
  };
};

export const accountDropdownList = (): DropdownItemBase[][] => {
  return [
    [
      dropdownItem(),
      dropdownItem({
        title: 'Мои голоса',
        routeName: RoutesName.votesMy
      })
    ],
    [
      dropdownItem({
        title: 'Редактировать профиль',
        routeName: RoutesName.accountProfile
      }),
      dropdownItem({
        title: 'Выйти',
        type: DropdownItemTypeBase.regular
      })
    ]
  ];
};

export const accountDropdownListForIndexPage = (): DropdownItemBase[][] => {
  return [
    [
      dropdownItem({
        title: 'Главная',
        routeName: RoutesName.index
      }),
      dropdownItem({
        title: 'Особенности',
        routeName: RoutesName.index
      }),
      dropdownItem({
        title: 'Цены',
        routeName: RoutesName.index
      })
    ],
    [
      dropdownItem({
        title: 'О нас',
        routeName: RoutesName.index
      }),
      dropdownItem({
        title: 'Контакты',
        routeName: RoutesName.index
      }),
      dropdownItem({
        title: 'Брэнд',
        routeName: RoutesName.index
      })
    ]
  ];
};

export const pollSettingsDropdownList = (): DropdownItemBase[][] => {
  return [
    [
      dropdownItem({
        title: 'Пригласить к опросу',
        routeName: RoutesName.pollInviteId,
        type: DropdownItemTypeBase.default
      })
    ],
    [
      dropdownItem({
        title: 'Настройки опроса',
        routeName: RoutesName.pollSettingsId,
        type: DropdownItemTypeBase.default
      }),
      dropdownItem({
        title: 'Управление участниками опроса',
        routeName: RoutesName.pollMembersId,
        type: DropdownItemTypeBase.default
      })
    ],
    [
      dropdownItem({
        title: 'Удалить опрос',
        routeName: RoutesName.index,
        type: DropdownItemTypeBase.regular
      })
    ]
  ];
};
