import { withDesign } from 'storybook-addon-designs';
import { Component } from 'vue';
import { uiSelect } from '~/components/ui';
import { selectOptions } from '~/static-data/select/factory';

export default {
  title: 'Components / Ui / Select',
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
      uiSelect
    },
    data() {
      return {
        value: '',
        options: selectOptions()
      };
    },
    template: `
      <div style="
        padding: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
      ">
        <ui-select
          v-model="value"
          :options="options"
        />
      </div>
    `
  };
}
