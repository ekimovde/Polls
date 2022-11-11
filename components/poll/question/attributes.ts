import { getTestSelectors } from '~/shared/utils/unit-test/test-id';

export const COMPONENT_NAME = 'poll-question';

export enum PollQuestionTextAttribute {
  placeholder = 'Заголовок вопроса...',
  questionSettings = 'Настройки вопроса',
  ownImage = 'Своя картинка',
  hide = 'Скрыть',
  show = 'Показать',
  remove = 'Удалить',
  chooseTypeQuestion = 'Выберите тип вопроса'
}

export enum PollQuestionTestLocator {
  //
}

export const dtPollQuestion = getTestSelectors(COMPONENT_NAME, PollQuestionTestLocator);
