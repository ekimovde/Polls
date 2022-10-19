import { NotificationMethods } from '~/components/shared/notification/component';
import NotificationModuleState, { NotificationParams } from '~/store/modules/notification';

export class GlobalNotification implements NotificationMethods {
  constructor(
    private readonly notificationRepo: NotificationModuleState
  ) { }

  showSuccess(params?: NotificationParams): void {
    this.notificationRepo.showSuccess(params);
  }

  showError(params?: NotificationParams): void {
    this.notificationRepo.showError(params);
  }
};
