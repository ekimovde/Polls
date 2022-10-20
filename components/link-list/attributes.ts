import { getTestSelectors } from '~/shared/utils/unit-test/test-id';

export const COMPONENT_NAME = 'links-list';

export enum LinkListTextAttribute {
  //
}

export enum LinkListTestLocator {
  //
}

export const dtLinkList = getTestSelectors(COMPONENT_NAME, LinkListTestLocator);
