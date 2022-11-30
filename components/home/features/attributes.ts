import { getTestSelectors } from '~/shared/utils/unit-test/test-id';

export const COMPONENT_NAME = 'home-features';

export enum HomeFeaturesTextAttribute {
  title = 'Что мы можем предложить',
  description = 'Взгляните на',
  seeMore = 'Смотрите больше'
}

export enum HomeFeaturesTestLocator {
  //
}

export const dtHomeFeatures = getTestSelectors(COMPONENT_NAME, HomeFeaturesTestLocator);
