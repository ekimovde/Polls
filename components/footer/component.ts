import { Component, mixins } from 'nuxt-property-decorator';
import { COMPONENT_NAME, FooterBlockTextAttribute, FooterBlockTestLocator } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';
import { Translatable } from '~/components/shared/translatable';
import { BrandBlock } from '~/components/brand';
import { footerLinks, footerOtherLinks, footerSocialLinks } from '~/static-data/footer/factory';

@Component({
  name: COMPONENT_NAME,
  components: {
    BrandBlock
  }
})
export default class extends mixins(TestId, Translatable) {
  readonly textAttributes = this.transAll(FooterBlockTextAttribute);
  readonly testLocators = FooterBlockTestLocator;

  readonly footerLinks = footerLinks();
  readonly footerOtherLinks = footerOtherLinks();

  readonly footerSocialLinks = footerSocialLinks();

  get currentYear(): number {
    return new Date().getFullYear();
  }

  get displayedCopyright(): string {
    return `© ${this.currentYear}`;
  }
}
