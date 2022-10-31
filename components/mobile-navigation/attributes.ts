import { getTestSelectors } from '~/shared/utils/unit-test/test-id';

export const COMPONENT_NAME = 'mobile-navigation';

export enum MobileNavigationTextAttribute {
  login = 'Login',
  startYourTrial = 'Start your free trial',
  dashboard = 'Dashboard'
}

export enum MobileNavigationTestLocator {
  //
}

export const dtMobileNavigation = getTestSelectors(COMPONENT_NAME, MobileNavigationTestLocator);
