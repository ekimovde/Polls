import { RouteItemBase, LinkItemBase } from '~/shared/repository/constants';
import { RoutesName } from '~/shared/repository/routes/routes-name';

export const footerLinkItem = (params: Partial<RouteItemBase> = {}): RouteItemBase => {
  return {
    title: 'About us',
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
      title: 'Contact',
      routeName: RoutesName.index
    }),
    footerLinkItem({
      title: 'Brand',
      routeName: RoutesName.index
    }),
    footerLinkItem({
      title: 'Support',
      routeName: RoutesName.index
    })
  ];
};

export const footerOtherLinks = (): RouteItemBase[] => {
  return [
    footerLinkItem({
      title: 'Terms of use',
      routeName: RoutesName.index
    }),
    footerLinkItem({
      title: 'Privacy policy',
      routeName: RoutesName.index
    }),
    footerLinkItem({
      title: 'Cookie policy',
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
