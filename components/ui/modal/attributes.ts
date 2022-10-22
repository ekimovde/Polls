import { getTestSelectors } from '~/shared/utils/unit-test/test-id';

export const COMPONENT_NAME = 'ui-modal';

export enum UiModalTestLocator {
  //
}

export const dtUiModal = getTestSelectors(COMPONENT_NAME, UiModalTestLocator);
