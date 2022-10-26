import { Component, mixins, Prop } from 'nuxt-property-decorator';
import { COMPONENT_NAME, SharedBadgeTestLocator } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';
import { SharedColorTheme } from '../color/component';

export enum SharedBadgeSize {
  xl = 'xl',
  small = 'small'
}

@Component({
  name: COMPONENT_NAME
})
export default class extends mixins(TestId) {
  @Prop({
    type: String,
    validator: val => Object.values(SharedColorTheme).includes(val),
    default: SharedColorTheme.purple
  }) readonly theme: SharedColorTheme;

  @Prop({
    type: String,
    validator: val => Object.values(SharedBadgeSize).includes(val),
    default: SharedBadgeSize.xl
  }) readonly size: SharedBadgeSize;

  @Prop({
    type: Boolean,
    default: false
  }) readonly isUppercase: boolean;

  readonly testLocators = SharedBadgeTestLocator;
}
