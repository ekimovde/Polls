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
          <th colspan="4">
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

          <th>
            darkGrey
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

          <td>
            <ui-button view="action" theme="dark-grey" size="xl">кнопка</ui-button>
          </td>
        </tr>

        <tr>
          <th>
            default
          </th>

          <td>
            NULL
          </td>

          <td class="center">
            <ui-button view="default" theme="grey" size="xl">x</ui-button>
          </td>

          <td>
            NULL
          </td>
        </tr>

        <tr>
          <th>
            simple
          </th>

          <td>
            <ui-button view="simple" theme="purple" size="by-content">click</ui-button>
          </td>

          <td>
            <ui-button view="simple" theme="grey" size="by-content">click</ui-button>
          </td>

          <td>
            NULL
          </td>
        </tr>
      </table>

      <table class="storybook-table">
        <tr>
          <th colspan="3">
            View состояния, Size xl
          </th>
        </tr>

        <tr>
          <th />

          <th>
            xl
          </th>

          <th>
            xs
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
            <ui-button view="action" theme="purple" size="xs">кнопка</ui-button>
          </td>
        </tr>

        <tr>
          <th>
            default
          </th>

          <td class="center">
            <ui-button view="default" theme="grey" size="xl">x</ui-button>
          </td>

          <td>
            NULL
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
