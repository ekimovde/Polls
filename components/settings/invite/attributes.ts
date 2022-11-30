import { getTestSelectors } from '~/shared/utils/unit-test/test-id';

export const COMPONENT_NAME = 'settings-invite';

export enum SettingsInviteTextAttribute {
  title = 'Пригласить по электронной почте',
  noteLabel = 'Добавьте примечание к приглашению',
  notePlaceholder = 'Добавьте сообщение к своему приглашению',
  emailLabel = 'Адрес электронной почты',
  emailPlaceholder = 'email@example.com',
  emailErrorMessage = 'Пожалуйста, введите адрес электронной почты',
  sendInvites = 'Отправить приглашение'
}

export enum SettingsInviteTestLocator {
  //
}

export const dtSettingsInvite = getTestSelectors(COMPONENT_NAME, SettingsInviteTestLocator);
