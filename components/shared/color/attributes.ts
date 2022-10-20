import { getTestSelectors } from '~/shared/utils/unit-test/test-id';

export const COMPONENT_NAME = 'shared-color';

export enum SharedColorTestLocator {
  //
}

export const dtSharedColor = getTestSelectors(COMPONENT_NAME, SharedColorTestLocator);
