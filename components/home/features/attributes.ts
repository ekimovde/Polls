import { getTestSelectors } from '~/shared/utils/unit-test/test-id';

export const COMPONENT_NAME = 'home-features';

export enum HomeFeaturesTextAttribute {
  title = 'What we have to offer',
  description = 'Take a look at',
  seeMore = 'See more'
}

export enum HomeFeaturesTestLocator {
  //
}

export const dtHomeFeatures = getTestSelectors(COMPONENT_NAME, HomeFeaturesTestLocator);
