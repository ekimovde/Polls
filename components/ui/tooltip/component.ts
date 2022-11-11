import { Component, mixins, Prop } from 'nuxt-property-decorator';
import { Tooltip } from 'element-ui';
import { COMPONENT_NAME, UiTooltipTestLocator } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';

export enum UiTooltipPlacement {
  top = 'top',
  rightStart = 'right-start'
}

@Component({
  name: COMPONENT_NAME,
  components: {
    ElTooltip: Tooltip
  }
})
export default class extends mixins(TestId) {
  @Prop({
    type: String,
    validator: val => Object.values(UiTooltipPlacement).includes(val),
    default: UiTooltipPlacement.top
  }) readonly placement: UiTooltipPlacement;

  @Prop({
    type: String,
    default: 'Content'
  }) readonly content: string;

  readonly testLocators = UiTooltipTestLocator;
}
