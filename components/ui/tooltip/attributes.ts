import { getTestSelectors } from '~/shared/utils/unit-test/test-id';

export const COMPONENT_NAME = 'ui-tooltip';

export enum UiTooltipTestLocator {
  //
}

export const dtUiTooltip = getTestSelectors(COMPONENT_NAME, UiTooltipTestLocator);
