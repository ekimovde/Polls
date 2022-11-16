import { Component, mixins, Prop } from 'nuxt-property-decorator';
import { COMPONENT_NAME, UiModalTestLocator } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';
import { uiButton } from '~/components/ui';
import { UiButtonView, UiButtonSize, UiButtonTheme } from '../button/component';

enum UiModalEvent {
  update = 'update:is-visible',
  close = 'close'
}

export enum UiModalView {
  default = 'default',
  regular = 'regular'
}

@Component({
  name: COMPONENT_NAME,
  components: {
    uiButton
  }
})
export default class extends mixins(TestId) {
  @Prop({
    type: Boolean,
    default: false
  }) readonly isVisible: boolean;

  @Prop({
    type: String,
    validator: val => Object.values(UiModalView).includes(val),
    default: UiModalView.default
  }) readonly view: UiModalView;

  readonly testLocators = UiModalTestLocator;

  readonly uiButtonView = UiButtonView;
  readonly uiButtonSize = UiButtonSize;
  readonly uiButtonTheme = UiButtonTheme;

  close(): void {
    this.$emit(UiModalEvent.update, false);
    this.$emit(UiModalEvent.close);
  }
}
