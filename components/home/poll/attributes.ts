import { getTestSelectors } from '~/shared/utils/unit-test/test-id';

export const COMPONENT_NAME = 'home-poll';

export enum HomePollTextAttribute {
  category = 'Командный настрой',
  title = 'Поймите, как ваша команда чувствует себя каждый день',
  description = 'Здоровье вашей команды - это большое дело. Счастливая команда - это продуктивная команда! Внимательно следите за настроением своей команды и действуйте, когда это необходимо. Добавлять свое настроение при посещении стендапа необязательно для членов команды.'
}

export enum HomePollTestLocator {
  //
}

export const dtHomePoll = getTestSelectors(COMPONENT_NAME, HomePollTestLocator);
