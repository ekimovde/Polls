import { Component, mixins } from 'nuxt-property-decorator';
import { COMPONENT_NAME, PollQuestionSettingsTextAttribute, PollQuestionSettingsTestLocator } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';
import { Translatable } from '~/components/shared/translatable';

@Component({
  name: COMPONENT_NAME
})
export default class extends mixins(TestId, Translatable) {
  readonly textAttributes = PollQuestionSettingsTextAttribute;
  readonly testLocators = PollQuestionSettingsTestLocator;
}
