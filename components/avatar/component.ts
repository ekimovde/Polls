import { Component, mixins, Prop } from 'nuxt-property-decorator';
import { COMPONENT_NAME, AvatarBlockTextAttribute, AvatarBlockTestLocator } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';
import { Translatable } from '~/components/shared/translatable';

@Component({
  name: COMPONENT_NAME
})
export default class extends mixins(TestId, Translatable) {
  @Prop({
    type: String,
    default: ''
  }) readonly src: string;

  readonly textAttributes = this.transAll(AvatarBlockTextAttribute);
  readonly testLocators = AvatarBlockTestLocator;

  readonly placeholder = require('@assets/images/avatar-placeholder.jpg')

  replaceByDefault(event: Event): void {
    (event.target as HTMLImageElement).src = this.placeholder;
  }
}
