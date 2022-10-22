import { Component, mixins, Prop } from 'nuxt-property-decorator';
import { Progress } from 'element-ui';
import { COMPONENT_NAME, UiModalTestLocator } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';

@Component({
  name: COMPONENT_NAME,
  components: {
    ElProgress: Progress
  }
})
export default class extends mixins(TestId) {
  @Prop({
    type: Boolean,
    default: false
  }) readonly isVisible: boolean;

  readonly testLocators = UiModalTestLocator;

  //
}
