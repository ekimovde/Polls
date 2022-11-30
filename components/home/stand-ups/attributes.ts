import { getTestSelectors } from '~/shared/utils/unit-test/test-id';

export const COMPONENT_NAME = 'home-stand-ups';

export enum HomeStandUpsTextAttribute {
  category = 'Ежедневные опросы',
  title = 'Четкое представление о том, кто над чем работает',
  description = 'Вы будете проинформированы о текущем прогрессе, намерениях, блокировках и вопросах - и все это без участия в разговоре. Администраторы команды будут уведомлены, когда член команды посетит стендап.'
}

export enum HomeStandUpsTestLocator {
  //
}

export const dtHomeStandUps = getTestSelectors(COMPONENT_NAME, HomeStandUpsTestLocator);
