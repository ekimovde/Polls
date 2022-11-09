import { getTestSelectors } from '~/shared/utils/unit-test/test-id';

export const COMPONENT_NAME = 'poll-question';

export enum PollQuestionTextAttribute {
  addAnswer = 'Добавьте ответ',
  pressEnter = 'или нажмите Enter↵'
}

export enum PollQuestionTestLocator {
  //
}

export const dtPollQuestion = getTestSelectors(COMPONENT_NAME, PollQuestionTestLocator);
