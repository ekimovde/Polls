import { Component, mixins } from 'nuxt-property-decorator';
import { COMPONENT_NAME, HeaderBlockTextAttribute, HeaderBlockTestLocator } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';
import { Translatable } from '~/components/shared/translatable';
import { BrandBlock } from '~/components/brand/index';
import { NavigationBlock } from '~/components/navigation/index';
import { AccountBlock } from '~/components/account';

export enum HeaderBlockView {
  default = 'default',
  regular = 'regular'
}

@Component({
  name: COMPONENT_NAME,
  components: {
    BrandBlock,
    NavigationBlock,
    AccountBlock
  }
})
export default class extends mixins(TestId, Translatable) {
  readonly textAttributes = this.transAll(HeaderBlockTextAttribute);
  readonly testLocators = HeaderBlockTestLocator;

  readonly headerRepo = this.$projectServices.headerRepo;

  get view(): HeaderBlockView {
    return this.headerRepo.view;
  }
}
