import { withDesign } from 'storybook-addon-designs';
import { Component } from 'vue';
import { uiButton } from '~/components/ui';

export default {
  title: 'Components / Ui / Button',
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url: ''
    }
  }
};

export const View = (): Component => ({
  components: {
    uiButton
  },
  template: `
    <div>
      <table class="storybook-table">
        <tr>
          <th colspan="3">
            View состояния, Size xs
          </th>
        </tr>

        <tr>
          <th />

          <th>
            purple
          </th>

          <th>
            grey
          </th>
        </tr>

        <tr>
          <th>
            action
          </th>

          <td>
            <ui-button view="action" theme="purple" size="xl">кнопка</ui-button>
          </td>

          <td>
            NULL
          </td>
        </tr>

        <tr>
          <th>
            default
          </th>

          <td>
            NULL
          </td>

          <td>
            <ui-button view="default" theme="grey" size="xl">x</ui-button>
          </td>
        </tr>
      </table>

      <table class="storybook-table">
        <tr>
          <th colspan="2">
            View состояния, Size xl
          </th>
        </tr>

        <tr>
          <th />

          <th>
            xl
          </th>
        </tr>

        <tr>
          <th>
            action
          </th>

          <td>
            <ui-button view="action" theme="purple" size="xl">кнопка</ui-button>
          </td>
        </tr>

        <tr>
          <th>
            default
          </th>

          <td>
            <ui-button view="default" theme="grey" size="xl">x</ui-button>
          </td>
        </tr>
      </table>
    </div>
  `
});

const stories = [
  View
];

stories.forEach(item => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  item.parameters = {
    viewport: {
      defaultViewport: 'ipadMax'
    }
  };
});
