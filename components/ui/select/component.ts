import { Component, mixins, Prop } from 'nuxt-property-decorator';
import ClickOutside from 'vue-click-outside';
import { COMPONENT_NAME, UiSelectTextAttribute, UiSelectTestLocator } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';
import { SelectOptionBase } from '~/shared/repository/constants';
import { Translatable } from '~/components/shared/translatable';
import { SharedColor } from '~/components/shared/color';
import { SharedColorSize } from '~/components/shared/color/component';

export enum UiSelectView {
  default = 'default',
  regular = 'regular'
}

export enum UiSelectEvent {
  input = 'input'
}

const DEFAULT_INITIAL_VALUE = 0;

@Component({
  name: COMPONENT_NAME,
  directives: {
    ClickOutside
  },
  components: {
    SharedColor
  }
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

  @Prop({
    type: String,
    validator: val => Object.values(UiSelectView).includes(val),
    default: UiSelectView.default
  }) readonly view: UiSelectView;

  readonly textAttributes = this.transAll(UiSelectTextAttribute);
  readonly testLocators = UiSelectTestLocator;

  readonly sharedColorSize = SharedColorSize;

  search = '';

  isActivated = false;

  get isDropdownShown(): boolean {
    return this.isActivated && this.hasOptions;
  }

  get isUnusedKeydownSelect(): boolean {
    return !this.isActivated || !this.hasOptions;
  }

  get isRegularView(): boolean {
    return this.view === UiSelectView.regular;
  }

  get isSharedColorShown(): boolean {
    return this.isRegularView && Boolean(this.value);
  }

  get hasOptions(): boolean {
    return Boolean(this.options.length);
  }

  get hasValue(): boolean {
    return Boolean(this.value) || this.value === DEFAULT_INITIAL_VALUE;
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
