import { getTestSelectors } from '~/shared/utils/unit-test/test-id';

export const COMPONENT_NAME = 'shared-badge';

export enum SharedBadgeTestLocator {
  //
}

export const dtSharedBadge = getTestSelectors(COMPONENT_NAME, SharedBadgeTestLocator);
