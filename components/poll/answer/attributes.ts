import { getTestSelectors } from '~/shared/utils/unit-test/test-id';

export const COMPONENT_NAME = 'poll-answer';

export enum PollAnswerTextAttribute {
  addAnswer = 'Добавьте ответ'
}

export enum PollAnswerTestLocator {
  //
}

export const dtPollAnswer = getTestSelectors(COMPONENT_NAME, PollAnswerTestLocator);
