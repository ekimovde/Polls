import { Component, mixins } from 'nuxt-property-decorator';
import { COMPONENT_NAME, SocialLinksTextAttribute, SocialLinksTestLocator } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';
import { Translatable } from '~/components/shared/translatable';
import { footerSocialLinks } from '~/static-data/footer/factory';

@Component({
  name: COMPONENT_NAME
})
export default class extends mixins(TestId, Translatable) {
  readonly textAttributes = this.transAll(SocialLinksTextAttribute);
  readonly testLocators = SocialLinksTestLocator;

  readonly socialLinks = footerSocialLinks();
}
