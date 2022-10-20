import { getTestSelectors } from '~/shared/utils/unit-test/test-id';

export const COMPONENT_NAME = 'ui-select';

export enum UiSelectTextAttribute {
  emptyInfo = 'Список пуст',
  notSelected = 'Не выбрано'
}

export enum UiSelectTestLocator {
  //
}

export const dtUiSelect = getTestSelectors(COMPONENT_NAME, UiSelectTestLocator);
