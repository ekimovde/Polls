import { Component, mixins } from 'nuxt-property-decorator';
import { COMPONENT_NAME, NavigationBlockTextAttribute, NavigationBlockTestLocator } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';
import { Translatable } from '~/components/shared/translatable';
import { RouteItemBase } from '~/shared/repository/constants';
import { navigations, navigationsForIndexPage } from '~/static-data/navigation/factory';
import { RoutesName } from '~/shared/repository/routes/routes-name';

@Component({
  name: COMPONENT_NAME
})
export default class extends mixins(TestId, Translatable) {
  readonly textAttributes = NavigationBlockTextAttribute;
  readonly testLocators = NavigationBlockTestLocator;

  get isIndexPage(): boolean {
    return this.$route.name === RoutesName.index;
  }

  get displayedNavigationLinks(): RouteItemBase[] {
    return this.isIndexPage ? navigationsForIndexPage() : navigations();
  }
}
