import { Component, mixins, Prop } from 'nuxt-property-decorator';
import { Progress } from 'element-ui';
import { COMPONENT_NAME, UiProgressTestLocator } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';
import { getPercentage } from '~/shared/utils/get-percentage';

export enum UiProgressTheme {
  green = 'green',
  purple = 'purple',
  red = 'red'
}

const DEFAULT_PERCENT_OF_COMPLETED = 100;

@Component({
  name: COMPONENT_NAME,
  components: {
    ElProgress: Progress
  }
})
export default class extends mixins(TestId) {
  @Prop({
    type: Number,
    required: true
  }) readonly progress: number;

  @Prop({
    type: String,
    default: UiProgressTheme.green,
    validator: val => Object.values(UiProgressTheme).includes(val)
  }) readonly theme: UiProgressTheme;

  readonly testLocators = UiProgressTestLocator;

  get percentage(): number {
    return getPercentage(this.progress);
  }

  get isCompleted(): boolean {
    return this.percentage === DEFAULT_PERCENT_OF_COMPLETED;
  }
}
