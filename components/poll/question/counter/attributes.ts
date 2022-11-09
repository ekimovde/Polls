import { getTestSelectors } from '~/shared/utils/unit-test/test-id';

export const COMPONENT_NAME = 'poll-question-counter';

export enum PollQuestionCounterTextAttribute {
  //
}

export enum PollQuestionCounterTestLocator {
  //
}

export const dtPollQuestionCounter = getTestSelectors(COMPONENT_NAME, PollQuestionCounterTestLocator);
