import { getTestSelectors } from '~/shared/utils/unit-test/test-id';

export const COMPONENT_NAME = 'poll-question-settings';

export enum PollQuestionSettingsTextAttribute {
  //
}

export enum PollQuestionSettingsTestLocator {
  //
}

export const dtPollQuestionSettings = getTestSelectors(COMPONENT_NAME, PollQuestionSettingsTestLocator);
