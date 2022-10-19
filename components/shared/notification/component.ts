import { Component, mixins } from 'nuxt-property-decorator';
import { COMPONENT_NAME, NotificationTestLocator, NotificationSuccess, NotificationError } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';
import { NotificationParams } from '~/store/modules/notification';

export enum NotificationMessageType {
  success = 'success',
  error = 'error'
}

export enum NotificationEvent {
  showSuccess = 'show-success',
  showError = 'show-error'
}

@Component({
  name: COMPONENT_NAME
})
export default class extends mixins(TestId) {
  readonly testLocators = NotificationTestLocator;

  readonly notificationRepo = this.$projectServices.notificationRepo;

  get isIconVisible(): boolean {
    return Boolean(this.icon);
  }

  get params(): NotificationParams {
    return this.notificationRepo.params;
  }

  get isShown(): boolean {
    return this.params.isNotificationShown;
  }

  get type(): NotificationMessageType {
    return this.params.type;
  }

  get isSuccess(): boolean {
    return this.type === NotificationMessageType.success;
  }

  get isError(): boolean {
    return this.type === NotificationMessageType.error;
  }

  get icon(): null {
    return null;
  }

  get title(): string {
    const { title } = this.params;

    if (title) {
      return title;
    }

    return this.isSuccess
      ? NotificationSuccess.defaultTitle
      : NotificationError.defaultTitle;
  }

  get message(): string {
    const { message } = this.params;

    if (message) {
      return message;
    }

    return this.isSuccess
      ? NotificationSuccess.defaultMessage
      : NotificationError.defaultMessage;
  }
}

export interface NotificationMethods {
  showSuccess(params?: NotificationParams): void;
  showError(params?: NotificationParams): void;
}
