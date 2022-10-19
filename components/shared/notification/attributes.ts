import { getTestSelectors } from '~/shared/utils/unit-test/test-id';

export const COMPONENT_NAME = 'notification';

export enum NotificationSuccess {
  defaultTitle = 'Успешно!',
  defaultMessage = 'Все операции выполнены',
}

export enum NotificationError {
  defaultTitle = 'Ошибка!',
  defaultMessage = 'Не удалось получить данные',
}

export enum NotificationTestLocator {
  icon = 'icon',
  title = 'title',
  message = 'message',
}

export const dtNotification = getTestSelectors(COMPONENT_NAME, NotificationTestLocator);
