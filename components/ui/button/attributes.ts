import { getTestSelectors } from '~/shared/utils/unit-test/test-id';

export const COMPONENT_NAME = 'ui-button';

export enum UiButtonTextAttribute {
  //
}

export enum UiButtonTestLocator {
  //
}

export const dtUiButton = getTestSelectors(COMPONENT_NAME, UiButtonTestLocator);
