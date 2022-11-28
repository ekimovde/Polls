import { withDesign } from 'storybook-addon-designs';
import { Component } from 'vue';
import { uiRadio } from '~/components/ui';

export default {
  title: 'Components / Ui / Radio',
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url: ''
    }
  }
};

export const Radio = (): Component => ({
  components: {
    uiRadio
  },
  data() {
    return {
      radioButtonsValues: [1, 2, 3],
      radioValue: 2,
      radioButtonsValues2: [4, 5, 6],
      radioValue2: 5
    };
  },
  template: `
    <div>
      <table class="storybook-table">
        <tr>
          <td>
            <template v-for="radioButtonValue in radioButtonsValues">
              <ui-radio
                :value="radioButtonValue"
                name="radio"
                v-model="radioValue"
                view="default"
              >
                Радио {{ radioButtonValue }}
              </ui-radio>
              <br>
            </template>
          </td>
        </tr>

        <tr>
          <td>
            View Default: {{ radioValue }}
          </td>
        </tr>

        <tr>
          <td>
            <template v-for="radioButtonValue in radioButtonsValues2">
              <ui-radio :value="radioButtonValue"
                :is-disabled="true"
                name="radio"
                v-model="radioValue2"
              >
                Радио {{ radioButtonValue }}
              </ui-radio>
              <br>
            </template>
          </td>
        </tr>

        <tr>
          <td>
            View Default Disabled
          </td>
        </tr>
      </table>
    </div>
  `
});
