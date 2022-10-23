import { getTestSelectors } from '~/shared/utils/unit-test/test-id';

export const COMPONENT_NAME = 'reactions-block';

export enum ReactionsBlockTextAttribute {
  title = 'Reactions to your changelog poll',
  pollInfo = 'in current poll'
}

export enum ReactionsBlockTestLocator {
  //
}

export const dtReactionsBlock = getTestSelectors(COMPONENT_NAME, ReactionsBlockTestLocator);
