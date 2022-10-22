import { Component, mixins, Prop } from 'nuxt-property-decorator';
import ClickOutside from 'vue-click-outside';
import { COMPONENT_NAME, UiSelectTextAttribute, UiSelectTestLocator } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';
import { SelectOptionBase } from '~/shared/repository/constants';
import { Translatable } from '~/components/shared/translatable';

export enum UiSelectEvent {
  input = 'input'
}

@Component({
  name: COMPONENT_NAME,
  directives: { ClickOutside }
})
export default class extends mixins(TestId, Translatable) {
  @Prop({
    type: [String, Number]
  }) readonly value: string | number;

  @Prop({
    type: String,
    default: 'Select option'
  }) readonly title: string;

  @Prop({
    type: Array,
    default: () => ([])
  }) readonly options: SelectOptionBase[];

  @Prop({
    type: Boolean,
    default: false
  }) readonly isDisabled: boolean;

  @Prop({
    type: Boolean,
    default: false
  }) readonly isExpanded: boolean;

  readonly textAttributes = this.transAll(UiSelectTextAttribute);
  readonly testLocators = UiSelectTestLocator;

  search = '';

  isActivated = false;

  get isDropdownShown(): boolean {
    return this.isActivated && this.hasOptions;
  }

  get isUnusedKeydownSelect(): boolean {
    return !this.isActivated || !this.hasOptions;
  }

  get hasOptions(): boolean {
    return Boolean(this.options.length);
  }

  get contentClasses(): string {
    return this.b(
      'content',
      {
        activated: this.isActivated,
        disabled: this.isDisabled
      }
    );
  }

  get diaplayedCurrentValue(): string {
    const currentOption = this.options.find(item => item.value === this.value);

    return currentOption ? currentOption.label : this.textAttributes.notSelected;
  }

  isSelected(value: string | number): boolean {
    return value === this.value;
  }

  activate(): void {
    if (this.isActivated || this.isDisabled) {
      return;
    }

    this.open();
  }

  deactivate(): void {
    if (!this.isActivated) {
      return;
    }

    this.close();
  }

  open(): void {
    this.isActivated = true;
  }

  close(): void {
    this.isActivated = false;
  }

  toggle(): void {
    this.isActivated ? this.deactivate() : this.activate();
  }

  select(option: SelectOptionBase): void {
    this.$emit(UiSelectEvent.input, option.value);
    this.close();
  }
}
