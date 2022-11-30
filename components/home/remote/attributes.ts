import { getTestSelectors } from '~/shared/utils/unit-test/test-id';

export const COMPONENT_NAME = 'home-remote';

export enum HomeRemoteTextAttribute {
  category = 'Удаленная дружелюбная команда',
  title = 'Легко просматривайте удаленные опросы',
  description = 'Мы верим, что удаленные опросы - это будущее. Мы допускаем это в стандартной комплектации с асинхронными ежедневными стендапами для членов вашей команды, с полной видимостью для администраторов / лидеров команды.'
}

export enum HomeRemoteTestLocator {
  //
}

export const dtHomeRemote = getTestSelectors(COMPONENT_NAME, HomeRemoteTestLocator);
