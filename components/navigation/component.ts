import { Component, mixins } from 'nuxt-property-decorator';
import { COMPONENT_NAME, NavigationBlockTextAttribute, NavigationBlockTestLocator } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';
import { Translatable } from '~/components/shared/translatable';
import { RouteItemBase } from '~/shared/repository/constants';
import { navigations } from '~/static-data/navigation/factory';

@Component({
  name: COMPONENT_NAME
})
export default class extends mixins(TestId, Translatable) {
  readonly textAttributes = this.transAll(NavigationBlockTextAttribute);
  readonly testLocators = NavigationBlockTestLocator;

  readonly navigations: RouteItemBase[] = navigations();
}
