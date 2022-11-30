import { getTestSelectors } from '~/shared/utils/unit-test/test-id';

export const COMPONENT_NAME = 'reactions-block';

export enum ReactionsBlockTextAttribute {
  title = 'Реакции на ваш опрос в журнале изменений',
  pollInfo = 'в текущем опросе'
}

export enum ReactionsBlockTestLocator {
  //
}

export const dtReactionsBlock = getTestSelectors(COMPONENT_NAME, ReactionsBlockTestLocator);
