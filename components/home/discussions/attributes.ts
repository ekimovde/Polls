import { getTestSelectors } from '~/shared/utils/unit-test/test-id';

export const COMPONENT_NAME = 'home-discussions';

export enum HomeDiscussionsTextAttribute {
  category = 'Обсуждения',
  title = 'Четкие обсуждения в режиме ожидания',
  description = 'У всех опросов есть комментарии. Оставьте комментарий к опросу, чтобы сказать "молодец" за выполнение трудной задачи, задайте вопросы или @ упомяните других членов команды, чтобы начать разговор.'
}

export enum HomeDiscussionsTestLocator {
  //
}

export const dtHomeDiscussions = getTestSelectors(COMPONENT_NAME, HomeDiscussionsTestLocator);
