import { Component, mixins, Prop } from 'nuxt-property-decorator';
import { COMPONENT_NAME, UiInputTextAttribute, UiInputTestLocator } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';
import { Translatable } from '~/components/shared/translatable';

export enum UiInputView {
  default = 'default',
  regular = 'regular',
  extra = 'extra'
}

export enum UiInputSize {
  xl = 'xl',
  xs = 'xs',
  small = 'small',
  byContent = 'by-content'
}

export enum UiInputType {
  default = 'text',
  password = 'password',
  number = 'number'
}

export enum UiInputEvent {
  input = 'input',
}

@Component({
  name: COMPONENT_NAME
})
export default class extends mixins(TestId, Translatable) {
  @Prop({
    type: [String, Number]
  }) readonly value: string | number;

  @Prop({
    type: String
  }) readonly placeholder: string;

  @Prop({
    type: String
  }) readonly errorMessage: string;

  @Prop({
    type: Boolean,
    default: false
  }) readonly isExpanded: boolean;

  @Prop({
    type: Boolean,
    default: false
  }) readonly isDisabled: boolean;

  @Prop({
    type: Boolean,
    default: false
  }) readonly isError: boolean;

  @Prop({
    type: [String, Number],
    default: 'auto'
  }) readonly maxLenght: string | number;

  @Prop({
    type: String,
    default: UiInputView.default,
    validator: val => Object.values(UiInputView).includes(val)
  }) readonly view: UiInputView;

  @Prop({
    type: String,
    default: UiInputSize.xl,
    validator: val => Object.values(UiInputSize).includes(val)
  }) readonly size: UiInputSize;

  @Prop({
    type: String,
    default: UiInputType.default,
    validator: val => Object.values(UiInputType).includes(val)
  }) readonly type: UiInputType;

  readonly textAttributes = UiInputTextAttribute;
  readonly testLocators = UiInputTestLocator;

  input(event: Event): void {
    const target = event.target as HTMLInputElement;

    this.$emit(UiInputEvent.input, target.value);
  }
}
