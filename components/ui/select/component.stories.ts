import { withDesign } from 'storybook-addon-designs';
import { Component } from 'vue';
import { uiSelect } from '~/components/ui';
import { selectOptions, selectOptionsWithColors } from '~/static-data/select/factory';
import { UiSelectView } from './component';

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

export const DefaultView = (): Component => create();
export const RegularView = (): Component => create({
  view: UiSelectView.regular,
  options: selectOptionsWithColors()
});

function create(props = {}): Component {
  return {
    components: {
      uiSelect
    },
    data() {
      return {
        value: '',
        options: selectOptions(),
        view: UiSelectView.default,
        ...props
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
          :view="view"
        />
      </div>
    `
  };
}
