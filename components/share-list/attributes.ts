import { getTestSelectors } from '~/shared/utils/unit-test/test-id';

export const COMPONENT_NAME = 'share-list';

export enum ShareListTextAttribute {
  new = 'New'
}

export enum ShareListTestLocator {
  //
}

export const dtShareList = getTestSelectors(COMPONENT_NAME, ShareListTestLocator);
