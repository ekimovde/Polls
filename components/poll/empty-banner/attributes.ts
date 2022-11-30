import { getTestSelectors } from '~/shared/utils/unit-test/test-id';

export const COMPONENT_NAME = 'poll-empty-banner';

export enum PollEmptyBannerTextAttribute {
  title = 'Давайте создадим ваш первый опрос',
  description = 'Опрос, например “Лучший язык программирования”, будет состоять из языков, которые являются наиболее популярными.',
  createPoll = 'Создать опрос'
}

export enum PollEmptyBannerTestLocator {
  //
}

export const dtPollEmptyBanner = getTestSelectors(COMPONENT_NAME, PollEmptyBannerTestLocator);
