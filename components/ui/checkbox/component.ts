import { Component, mixins, Prop } from 'nuxt-property-decorator';
import { COMPONENT_NAME, UiCheckboxTextAttrubute, UiCheckboxTestLocator } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';
import { Translatable } from '~/components/shared/translatable';

enum UiCheckboxEvent {
  update = 'update:is-checked',
  change = 'change'
}

@Component({
  name: COMPONENT_NAME
})
export default class extends mixins(TestId, Translatable) {
  @Prop({
    type: Boolean,
    default: false
  }) readonly isChecked: boolean;

  readonly textAttributes = UiCheckboxTextAttrubute;
  readonly testLocators = UiCheckboxTestLocator;

  change(event: Event): void {
    const isChecked = !!(event.target as HTMLInputElement).checked;

    void this.$emit(UiCheckboxEvent.update, isChecked);
    void this.$emit(UiCheckboxEvent.change, isChecked);
  }
}
