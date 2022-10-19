import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import { NotificationMessageType } from '~/components/shared/notification/component';

enum NotificationMutation {
  SHOW = 'SHOW'
}

export interface NotificationParams {
  isNotificationShown?: boolean
  type?: NotificationMessageType
  title?: string
  message?: string
  delay?: number
}

@Module({
  namespaced: true,
  stateFactory: true,
  name: 'notification'
})
export default class NotificationModuleState extends VuexModule {
  params: NotificationParams = {
    isNotificationShown: false,
    type: null,
    title: null,
    message: null,
    delay: 2500
  }

  getNotificationParams(): NotificationParams {
    return this.params;
  }

  @Mutation
  [NotificationMutation.SHOW](params: Partial<NotificationParams>): void {
    this.params.isNotificationShown = true;
    this.params.type = params.type;

    if (params.title) {
      this.params.title = params.title;
    }

    if (params.message) {
      this.params.message = params.message;
    }

    setTimeout(() => {
      this.params.isNotificationShown = false;
      this.params.type = null;
      this.params.title = null;
      this.params.message = null;
    }, this.params.delay);
  }

  @Action({ rawError: true })
  showSuccess(params: Partial<NotificationParams> = {}): void {
    const updateParams = { ...params, type: NotificationMessageType.success };

    this.SHOW(updateParams);
  }

  @Action({ rawError: true })
  showError(params: Partial<NotificationParams> = {}): void {
    const updateParams = { ...params, type: NotificationMessageType.error };

    this.SHOW(updateParams);
  }
}
