import { RouteItemBase, LinkItemBase } from '~/shared/repository/constants';
import { RoutesName } from '~/shared/repository/routes/routes-name';

export const footerLinkItem = (params: Partial<RouteItemBase> = {}): RouteItemBase => {
  return {
    title: 'О нас',
    routeName: RoutesName.index,
    ...params
  };
};

export const footerSocialLink = (params: Partial<LinkItemBase> = {}): LinkItemBase => {
  return {
    href: 'https://twitter.com/try_stand',
    target: '_blank',
    src: require('@assets/svg/twitter.svg'),
    ...params
  };
};

export const footerLinks = (): RouteItemBase[] => {
  return [
    footerLinkItem(),
    footerLinkItem({
      title: 'Контакты',
      routeName: RoutesName.index
    }),
    footerLinkItem({
      title: 'Бренд',
      routeName: RoutesName.index
    }),
    footerLinkItem({
      title: 'Помощь',
      routeName: RoutesName.index
    })
  ];
};

export const footerOtherLinks = (): RouteItemBase[] => {
  return [
    footerLinkItem({
      title: 'Условия использования',
      routeName: RoutesName.index
    }),
    footerLinkItem({
      title: 'Политика конфиденциальности',
      routeName: RoutesName.index
    }),
    footerLinkItem({
      title: 'Политика cookie',
      routeName: RoutesName.index
    })
  ];
};

export const footerSocialLinks = (): LinkItemBase[] => {
  return [
    footerSocialLink(),
    footerSocialLink({
      href: 'https://www.facebook.com/trystandapp/',
      src: require('@assets/svg/facebook.svg')
    })
  ];
};
