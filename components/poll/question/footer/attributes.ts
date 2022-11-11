import { getTestSelectors } from '~/shared/utils/unit-test/test-id';

export const COMPONENT_NAME = 'poll-question-footer';

export enum PollQuestionFooterTextAttribute {
  questionSettings = 'Настройки вопроса',
  ownImage = 'Своя картинка',
  hide = 'Скрыть',
  show = 'Показать',
  remove = 'Удалить',
  answersSettings = 'Настройки ответов',
  haveMultiple = 'Можно несколько'
}

export enum PollQuestionFooterTestLocator {
  //
}

export const dtPollQuestionFooter = getTestSelectors(COMPONENT_NAME, PollQuestionFooterTestLocator);
