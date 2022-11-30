import { Component, mixins } from 'nuxt-property-decorator';
import { COMPONENT_NAME, SummaryBlockTextAttribute, SummaryBlockTestLocator } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';
import { Translatable } from '~/components/shared/translatable';
import { SummaryBase } from './model';
import { summaryList } from '~/static-data/summary/factory';

@Component({
  name: COMPONENT_NAME
})
export default class extends mixins(TestId, Translatable) {
  readonly textAttributes = SummaryBlockTextAttribute;
  readonly testLocators = SummaryBlockTestLocator;

  readonly summaryList: SummaryBase[] = summaryList();

  getClasses(icon: string): string {
    return `${icon} ${this.b('icon')}`;
  }
}
