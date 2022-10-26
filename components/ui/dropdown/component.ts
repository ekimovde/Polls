import { Component, mixins, Prop } from 'nuxt-property-decorator';
import { Popover } from 'element-ui';
import ClickOutside from 'vue-click-outside';
import { COMPONENT_NAME, UiDropdownTestLocator } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';

export enum UiDropdownEvent {
  update = 'update:is-visible'
}

@Component({
  name: COMPONENT_NAME,
  directives: {
    ClickOutside
  },
  components: {
    ElPopover: Popover
  }
})
export default class extends mixins(TestId) {
  @Prop({
    type: Boolean,
    required: true
  }) readonly isVisible: boolean;

  readonly testLocators = UiDropdownTestLocator;

  show(): void {
    this.$emit(UiDropdownEvent.update, true);
  }

  hide(): void {
    if (!this.isVisible) {
      return;
    }

    this.$emit(UiDropdownEvent.update, false);
  }
}
