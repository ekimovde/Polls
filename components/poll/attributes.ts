import { getTestSelectors } from '~/shared/utils/unit-test/test-id';

export const COMPONENT_NAME = 'poll-block';

export enum PollBlockTextAttribute {
  yesterday = 'вчера',
  ago = 'назад',
  now = 'сейчас',
  invalidDate = 'Невалидная дата',
  join = 'Вступить'
}

export enum PollBlockTestLocator {
  //
}

export const dtPollBlock = getTestSelectors(COMPONENT_NAME, PollBlockTestLocator);
