import { Component, mixins } from 'nuxt-property-decorator';
import { COMPONENT_NAME, FooterBlockTextAttribute, FooterBlockTestLocator } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';
import { Translatable } from '~/components/shared/translatable';
import { BrandBlock } from '~/components/brand';
import { footerLinks, footerOtherLinks } from '~/static-data/footer/factory';
import { SocialLinks } from '~/components/social-links';

@Component({
  name: COMPONENT_NAME,
  components: {
    BrandBlock,
    SocialLinks
  }
})
export default class extends mixins(TestId, Translatable) {
  readonly textAttributes = this.transAll(FooterBlockTextAttribute);
  readonly testLocators = FooterBlockTestLocator;

  readonly footerLinks = footerLinks();
  readonly footerOtherLinks = footerOtherLinks();

  get displayedCopyright(): string {
    return `© ${new Date().getFullYear()}`;
  }
}
