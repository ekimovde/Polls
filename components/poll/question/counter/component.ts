import { Component, mixins, Prop } from 'nuxt-property-decorator';
import { COMPONENT_NAME, PollQuestionCounterTextAttribute, PollQuestionCounterTestLocator } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';
import { Translatable } from '~/components/shared/translatable';

export const DEFAULT_COUNT = 0;

@Component({
  name: COMPONENT_NAME
})
export default class extends mixins(TestId, Translatable) {
  @Prop({
    type: Number,
    default: DEFAULT_COUNT
  }) readonly count: number;

  readonly textAttributes = this.transAll(PollQuestionCounterTextAttribute);
  readonly testLocators = PollQuestionCounterTestLocator;
}
