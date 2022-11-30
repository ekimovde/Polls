import { getTestSelectors } from '~/shared/utils/unit-test/test-id';

export const COMPONENT_NAME = 'mobile-navigation';

export enum MobileNavigationTextAttribute {
  login = 'Авторизоваться',
  startYourTrial = 'Приступить',
  dashboard = 'Панель'
}

export enum MobileNavigationTestLocator {
  //
}

export const dtMobileNavigation = getTestSelectors(COMPONENT_NAME, MobileNavigationTestLocator);
