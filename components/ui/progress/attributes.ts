import { getTestSelectors } from '~/shared/utils/unit-test/test-id';

export const COMPONENT_NAME = 'ui-progress';

export enum UiProgressTestLocator {
  //
}

export const dtUiProgress = getTestSelectors(COMPONENT_NAME, UiProgressTestLocator);
