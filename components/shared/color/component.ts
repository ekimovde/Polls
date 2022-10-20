import { Component, mixins, Prop } from 'nuxt-property-decorator';
import { COMPONENT_NAME, SharedColorTestLocator } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';

export enum SharedColorTheme {
  purple = 'purple',
  orange = 'orange',
  green = 'green',
  red = 'red',
  pink = 'pink',
  blue = 'blue',
  grey = 'grey'
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

  readonly testLocators = SharedColorTestLocator;
}
