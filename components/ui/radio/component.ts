import { Component, mixins, Prop, Model, Ref, Watch } from 'nuxt-property-decorator';
import { COMPONENT_NAME, UiRadioTextAttrubute, UiRadioTestLocator } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';
import { Translatable } from '~/components/shared/translatable';

export type Value = string | number | boolean;

export enum UiRadioView {
  default = 'default'
}

enum UiRadioEvent {
  change = 'change'
}

@Component({
  name: COMPONENT_NAME
})
export default class extends mixins(TestId, Translatable) {
  @Prop({
    type: [String, Number, Boolean]
  }) readonly value: Value;

  @Prop({
    type: String
  }) readonly name: string;

  @Prop({
    type: Boolean,
    default: false
  }) readonly isDisabled: boolean;

  @Prop({
    type: String,
    validator: val => Object.keys(UiRadioView).includes(val),
    default: UiRadioView.default
  }) readonly view: UiRadioView;

  @Model('change', {
    type: [String, Number, Boolean]
  }) readonly modelValue: Value;

  @Ref('input') readonly input: HTMLInputElement;

  readonly textAttributes = UiRadioTextAttrubute;
  readonly testLocators = UiRadioTestLocator;

  get isChecked(): boolean {
    return this.value === this.modelValue && !this.isDisabled;
  }

  get isLabelExist(): boolean {
    return this.$slots.default !== undefined;
  }

  mounted(): void {
    this.input.checked = this.isChecked;
  }

  onChange(): void {
    if (this.isDisabled) {
      return;
    }

    this.$emit(UiRadioEvent.change, this.value);
  }

  focus(): void {
    this.input.focus();
  }

  @Watch('modelValue')
  onModelValueChanged(): void {
    this.input.checked = this.isChecked;
  }
}
