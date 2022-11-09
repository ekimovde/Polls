import { getTestSelectors } from '~/shared/utils/unit-test/test-id';

export const COMPONENT_NAME = 'poll-question-type';

export enum PollQuestionTypeTextAttribute {
  //
}

export enum PollQuestionTypeTestLocator {
  //
}

export const dtPollQuestionType = getTestSelectors(COMPONENT_NAME, PollQuestionTypeTestLocator);
