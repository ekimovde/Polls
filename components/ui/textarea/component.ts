import { Component, mixins, Prop } from 'nuxt-property-decorator';
import { Progress } from 'element-ui';
import { COMPONENT_NAME, UiTextareaTestLocator } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';

enum UiTextareaEvent {
  input = 'input'
}

@Component({
  name: COMPONENT_NAME,
  components: {
    ElProgress: Progress
  }
})
export default class extends mixins(TestId) {
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

  readonly testLocators = UiTextareaTestLocator;

  input(event: Event): void {
    const target = event.target as HTMLTextAreaElement;

    this.$emit(UiTextareaEvent.input, target.value);
  }
}
