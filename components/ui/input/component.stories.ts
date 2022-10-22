import { withDesign } from 'storybook-addon-designs';
import { Component } from 'vue';
import { uiInput } from '~/components/ui';
import { UiInputSize } from './component';

export default {
  title: 'Components / Ui / Input',
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
export const IsError = (): Component => create({
  placeholder: 'Введите текст',
  isError: true,
  errorMessage: 'Введите текст'
});
export const IsXlSize = (): Component => create({
  size: UiInputSize.xl,
  placeholder: 'Введите текст'
});
export const IsXsSize = (): Component => create({
  size: UiInputSize.xs,
  placeholder: 'Введите текст'
});

function create(props = {}): Component {
  return {
    components: {
      uiInput
    },
    data() {
      return {
        isError: false,
        isExpanded: false,
        isDisabled: false,
        size: UiInputSize.xl,
        errorMessage: '',
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
        <ui-input
          :placeholder="placeholder"
          :size="size"
          :is-expanded="isExpanded"
          :is-error="isError"
          :is-disabled="isDisabled"
          :error-message="errorMessage"
        />
      </div>
    `
  };
}
