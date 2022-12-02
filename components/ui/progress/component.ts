import { Component, mixins, Prop } from 'nuxt-property-decorator';
import { Progress } from 'element-ui';
import { COMPONENT_NAME, UiProgressTestLocator } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';
import { getPercentage } from '~/shared/utils/get-percentage';
import { SharedColorTheme } from '~/components/shared/color/component';

export enum UiProgressView {
  default = 'default'
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
    default: SharedColorTheme.green,
    validator: val => Object.values(SharedColorTheme).includes(val)
  }) readonly theme: SharedColorTheme;

  @Prop({
    type: String,
    default: UiProgressView.default,
    validator: val => Object.values(UiProgressView).includes(val)
  }) readonly view: UiProgressView;

  readonly testLocators = UiProgressTestLocator;

  get percentage(): number {
    return getPercentage(this.progress);
  }

  get isCompleted(): boolean {
    return this.percentage === DEFAULT_PERCENT_OF_COMPLETED;
  }
}
