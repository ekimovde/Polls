/* eslint-disable @typescript-eslint/ban-ts-comment */
import { withDesign } from 'storybook-addon-designs';
import { Component } from 'vue';
import { uiNotification } from '~/components/ui';
import { notification } from '~/shared/repository/fake-services-factory';

export default {
  title: 'Components / Shared / Notification',
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url: ''
    }
  }
};

export const Default = (): Component => create();

function create(): Component {
  return {
    components: {
      uiNotification
    },
    methods: {
      showSuccess(): void {
        notification.showSuccess();
      },

      showError(): void {
        notification.showError();
      }
    },
    template: `
      <div style="width: 100%; height: 90vh; display: flex;">
        <ui-notification />

        <button style="margin-top: 100px; width: 200px; height: 50px" @click.stop="showSuccess">
          show success
        </button>
        <button style="margin-top: 100px; width: 200px; height: 50px" @click.stop="showError">
          show error
        </button>
      </div>`
  };
}
