import { getTestSelectors } from '~/shared/utils/unit-test/test-id';

export const COMPONENT_NAME = 'ui-switch';

export enum UiSwitchTestLocator {
  //
}

export const dtUiSwitch = getTestSelectors(COMPONENT_NAME, UiSwitchTestLocator);
