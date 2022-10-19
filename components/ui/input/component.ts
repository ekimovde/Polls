import { Component, mixins, Prop } from 'nuxt-property-decorator';
import { COMPONENT_NAME, UiInputTextAttribute, UiInputTestLocator } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';
import { Translatable } from '~/components/shared/translatable';

export enum UiInputView {
  default = 'default'
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
    type: Boolean,
    default: false
  }) readonly isExpanded: boolean;

  @Prop({
    type: Boolean,
    default: false
  }) readonly isDisabled: boolean;

  @Prop({
    type: String,
    default: UiInputView.default,
    validator: val => Object.values(UiInputView).includes(val)
  }) readonly view: UiInputView;

  @Prop({
    type: String,
    default: UiInputType.default,
    validator: val => Object.values(UiInputType).includes(val)
  }) readonly type: UiInputType;

  readonly textAttributes = this.transAll(UiInputTextAttribute)
  readonly testLocators = UiInputTestLocator;

  input(event: Event): void {
    const target = <HTMLInputElement>event.target;

    this.$emit(UiInputEvent.input, target.value);
  }
}
