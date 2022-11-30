import { getTestSelectors } from '~/shared/utils/unit-test/test-id';

export const COMPONENT_NAME = 'settings-share';

export enum SettingsShareTextAttribute {
  title = 'Поделитесь ссылкой для присоединения',
  descriptionOne = 'Это позволит любому, у кого есть ссылка, присоединиться к вашему опросу, мы отправим электронное письмо администратору опроса и владельцу компании, когда член опроса присоединится.',
  descriptionTwo = 'Вы можете повысить членов опроса до администратора опроса в любое время, как только они присоединятся.',
  placeholder = 'Ссылка для присоединения',
  new = 'New'
}

export enum SettingsShareTestLocator {
  //
}

export const dtSettingsShare = getTestSelectors(COMPONENT_NAME, SettingsShareTestLocator);
