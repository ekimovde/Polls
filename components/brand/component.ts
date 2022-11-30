import { Component, mixins, Prop } from 'nuxt-property-decorator';
import { Route } from 'vue-router';
import { COMPONENT_NAME, BrandBlockTextAttribute, BrandBlockTestLocator } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';
import { Translatable } from '~/components/shared/translatable';
import { RoutesName } from '~/shared/repository/routes/routes-name';
import { routes } from '~/shared/repository/routes';

export enum BrandBlockSize {
  default = 'default',
  xl = 'xl'
}

@Component({
  name: COMPONENT_NAME
})
export default class extends mixins(TestId, Translatable) {
  @Prop({
    type: String,
    validator: val => Object.values(BrandBlockSize).includes(val),
    default: BrandBlockSize.default
  }) readonly size: BrandBlockSize;

  readonly textAttributes = BrandBlockTextAttribute;
  readonly testLocators = BrandBlockTestLocator;

  readonly userRepo = this.$projectServices.userRepo;

  readonly picture = require('@assets/svg/brand.svg');

  readonly routesName = RoutesName;

  get isAuthorized(): boolean {
    return this.userRepo.isAuthorized;
  }

  get isIndexPage(): boolean {
    return this.$route.name === RoutesName.index;
  }

  get linkRoute(): Partial<Route> {
    return this.isAuthorized && !this.isIndexPage
      ? routes[RoutesName.dashboard]
      : routes[RoutesName.index];
  }
}
