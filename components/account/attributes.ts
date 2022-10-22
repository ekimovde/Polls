import { getTestSelectors } from '~/shared/utils/unit-test/test-id';

export const COMPONENT_NAME = 'account-block';

export enum AccountBlockTextAttribute {
  //
}

export enum AccountBlockTestLocator {
  //
}

export const dtAccountBlock = getTestSelectors(COMPONENT_NAME, AccountBlockTestLocator);
