import { getTestSelectors } from '~/shared/utils/unit-test/test-id';

export const COMPONENT_NAME = 'poll-question-help';

export enum PollQuestionHelpTextAttribute {
  addAnswer = 'Добавьте ответ'
}

export enum PollQuestionHelpTestLocator {
  //
}

export const dtPollQuestionHelp = getTestSelectors(COMPONENT_NAME, PollQuestionHelpTestLocator);
