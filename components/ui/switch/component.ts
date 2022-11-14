import { Component, mixins, Prop } from 'nuxt-property-decorator';
import { Switch } from 'element-ui';
import { COMPONENT_NAME, UiSwitchTestLocator } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';

export enum UiSwitchSize {
  default = 'default',
  xs = 'xs'
}

@Component({
  name: COMPONENT_NAME,
  components: {
    ElSwitch: Switch
  }
})
export default class extends mixins(TestId) {
  @Prop({
    type: String,
    validator: val => Object.values(UiSwitchSize).includes(val),
    default: UiSwitchSize.default
  }) readonly size: UiSwitchSize;

  readonly testLocators = UiSwitchTestLocator;
}
