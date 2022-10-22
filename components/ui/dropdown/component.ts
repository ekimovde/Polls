import { Component, mixins, Prop } from 'nuxt-property-decorator';
import { Popover } from 'element-ui';
import { COMPONENT_NAME, UiDropdownTestLocator } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';

export enum UiDropdownPlacement {
  top = 'top',
  topStart = 'top-start',
  topEnd = 'top-end',
  bottom = 'bottom',
  bottomStart = 'bottom-start',
  bottomEnd = 'bottom-end',
  left = 'left',
  leftStart = 'left-start',
  leftEnd = 'left-end',
  right = 'right',
  rightStart = 'right-start',
  rightEnd = 'right-end'
}

export enum UiDropdownEvent {
  update = 'update:is-visible'
}

@Component({
  name: COMPONENT_NAME,
  components: {
    ElPopover: Popover
  }
})
export default class extends mixins(TestId) {
  @Prop({
    type: String,
    default: UiDropdownPlacement.bottom,
    validator: val => Object.values(UiDropdownPlacement).includes(val)
  }) readonly placement: UiDropdownPlacement;

  @Prop({
    type: Boolean,
    required: true
  }) readonly isVisible: boolean;

  readonly testLocators = UiDropdownTestLocator;

  show(): void {
    this.$emit(UiDropdownEvent.update, true);
  }

  hide(): void {
    this.$emit(UiDropdownEvent.update, false);
  }
}
