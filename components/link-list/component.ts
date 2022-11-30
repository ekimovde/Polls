import { Component, mixins } from 'nuxt-property-decorator';
import { COMPONENT_NAME, LinkListTextAttribute, LinkListTestLocator } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';
import { Translatable } from '../shared/translatable';
import { linkList } from '~/static-data/link-list/factory';

@Component({
  name: COMPONENT_NAME
})
export default class extends mixins(TestId, Translatable) {
  readonly textAttributes = LinkListTextAttribute;
  readonly testLocators = LinkListTestLocator;

  readonly linkList = linkList()
}
