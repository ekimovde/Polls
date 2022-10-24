import { getTestSelectors } from '~/shared/utils/unit-test/test-id';

export const COMPONENT_NAME = 'tab-links';

export enum TabLinksTextAttribute {
  //
}

export enum TabLinksTestLocator {
  //
}

export const dtTabLinks = getTestSelectors(COMPONENT_NAME, TabLinksTestLocator);
