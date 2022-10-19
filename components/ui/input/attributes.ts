import { getTestSelectors } from '~/shared/utils/unit-test/test-id';

export const COMPONENT_NAME = 'ui-input';

export enum UiInputTextAttribute {
  //
}

export enum UiInputTestLocator {
  //
}

export const dtUiInput = getTestSelectors(COMPONENT_NAME, UiInputTestLocator);
