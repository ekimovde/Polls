import { Component, mixins } from 'nuxt-property-decorator';
import { COMPONENT_NAME, TabLinksTextAttribute, TabLinksTestLocator } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';
import { Translatable } from '~/components/shared/translatable';
import { RouteItemBase } from '~/shared/repository/constants';
import { tabLinks } from '~/static-data/tab-links/factory';

@Component({
  name: COMPONENT_NAME
})
export default class extends mixins(TestId, Translatable) {
  readonly textAttributes = TabLinksTextAttribute;
  readonly testLocators = TabLinksTestLocator;

  readonly tabLinks: RouteItemBase[] = tabLinks();
}
