import { getTestSelectors } from '~/shared/utils/unit-test/test-id';

export const COMPONENT_NAME = 'ui-textarea';

export enum UiTextareaTestLocator {
  //
}

export const dtUiTextarea = getTestSelectors(COMPONENT_NAME, UiTextareaTestLocator);
