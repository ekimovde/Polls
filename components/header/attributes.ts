import { getTestSelectors } from '~/shared/utils/unit-test/test-id';

export const COMPONENT_NAME = 'header-block';

export enum HeaderBlockTextAttribute {
  dashboard = 'Dashboard',
  login = 'Login'
}

export enum HeaderBlockTestLocator {
  //
}

export const dtHeaderBlock = getTestSelectors(COMPONENT_NAME, HeaderBlockTestLocator);
