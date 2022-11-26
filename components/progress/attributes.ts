import { getTestSelectors } from '~/shared/utils/unit-test/test-id';

export const COMPONENT_NAME = 'progress-block';

export enum ProgressBlockTextAttribute {
  created = 'Создано',
  consists = 'Состоит',
  participation = 'Участвовал',
  from = 'из',
  createdInfo = 'Вы создали опросов за все время',
  consistsInfo = 'Вы вступили в опросы за все время',
  participationInfo = 'Вы участвовали в опросах за все время'
}

export enum ProgressBlockTestLocator {
  //
}

export const dtProgressBlock = getTestSelectors(COMPONENT_NAME, ProgressBlockTestLocator);
