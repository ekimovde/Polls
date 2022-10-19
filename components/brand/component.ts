import { Component, mixins } from 'nuxt-property-decorator';
import { COMPONENT_NAME, BrandBlockTextAttribute, BrandBlockTestLocator } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';
import { Translatable } from '~/components/shared/translatable';
import { RoutesName } from '~/shared/repository/routes/routes-name';

@Component({
  name: COMPONENT_NAME
})
export default class extends mixins(TestId, Translatable) {
  readonly textAttributes = this.transAll(BrandBlockTextAttribute);
  readonly testLocators = BrandBlockTestLocator;

  readonly picture = require('@assets/svg/brand.svg');

  readonly routesName = RoutesName;
}
