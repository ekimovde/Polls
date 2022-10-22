import { getTestSelectors } from '~/shared/utils/unit-test/test-id';

export const COMPONENT_NAME = 'ui-dropdown';

export enum UiDropdownTestLocator {
  //
}

export const dtUiDropdown = getTestSelectors(COMPONENT_NAME, UiDropdownTestLocator);
