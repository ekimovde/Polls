import { withDesign } from 'storybook-addon-designs';
import { Component } from 'vue';
import { uiInput } from '~/components/ui';
import { UiInputSize, UiInputView } from './component';

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

export const DefaultView = (): Component => create();
export const RegularView = (): Component => create({ view: UiInputView.regular });
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
        view: UiInputView.default,
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
        background-color: #fafaff;
      ">
        <ui-input
          :view="view"
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
