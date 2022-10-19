import { Component, mixins, Prop } from 'nuxt-property-decorator';
import { COMPONENT_NAME, ProgressBlockTextAttribute, ProgressBlockTestLocator } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';
import { Translatable } from '~/components/shared/translatable';
import { UserProgressResponse } from '~/shared/repository/repo';

@Component({
  name: COMPONENT_NAME
})
export default class extends mixins(TestId, Translatable) {
  @Prop({
    type: Array,
    required: true
  }) readonly progress: UserProgressResponse[];

  readonly textAttributes = this.transAll(ProgressBlockTextAttribute);
  readonly testLocators = ProgressBlockTestLocator;

  //
}
