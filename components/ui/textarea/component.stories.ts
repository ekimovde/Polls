import { withDesign } from 'storybook-addon-designs';
import { Component } from 'vue';
import { uiTextarea } from '~/components/ui';

export default {
  title: 'Components / Ui / Textarea',
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url: ''
    }
  }
};

export const Default = (): Component => create();
export const Placeholder = (): Component => create({ placeholder: 'Введите текст' });
export const IsExpanded = (): Component => create({ isExpanded: true });
export const IsDisabled = (): Component => create({ isDisabled: true });

function create(props = {}): Component {
  return {
    components: {
      uiTextarea
    },
    data() {
      return {
        isExpanded: false,
        isDisabled: false,
        placeholder: '',
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
        <ui-textarea
          :placeholder="placeholder"
          :is-expanded="isExpanded"
          :is-disabled="isDisabled"
        />
      </div>
    `
  };
}
