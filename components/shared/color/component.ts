import { Component, mixins, Prop } from 'nuxt-property-decorator';
import { COMPONENT_NAME, SharedColorTestLocator } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';

export enum SharedColorTheme {
  purple = 'purple',
  orange = 'orange',
  green = 'green',
  red = 'red',
  pink = 'pink',
  pinkLight = 'pink-light',
  blue = 'blue',
  grey = 'grey',
}

export enum SharedColorSize {
  xl = 'xl',
  xs = 'xs'
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
    validator: val => Object.values(SharedColorSize).includes(val),
    default: SharedColorSize.xl
  }) readonly size: SharedColorSize;

  readonly testLocators = SharedColorTestLocator;
}
