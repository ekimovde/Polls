import { Component, mixins, Prop } from 'nuxt-property-decorator';
import { COMPONENT_NAME, HomeBlockLayoutTextAttribute, HomeBlockLayoutTestLocator } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';
import { Translatable } from '~/components/shared/translatable';
import { HomeBlockTheme } from '../model';

export enum HomeBlockLayoutView {
  default = 'default',
  regular = 'regular'
}

@Component({
  name: COMPONENT_NAME
})
export default class extends mixins(TestId, Translatable) {
  @Prop({
    type: String,
    validator: val => Object.values(HomeBlockLayoutView).includes(val),
    default: HomeBlockLayoutView.default
  }) readonly view: HomeBlockLayoutView;

  @Prop({
    type: String,
    validator: val => Object.values(HomeBlockTheme).includes(val),
    default: HomeBlockTheme.pink
  }) readonly theme: HomeBlockTheme;

  readonly textAttributes = this.transAll(HomeBlockLayoutTextAttribute);
  readonly testLocators = HomeBlockLayoutTestLocator;
}
