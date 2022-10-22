import { Component, mixins } from 'nuxt-property-decorator';
import { Progress } from 'element-ui';
import { COMPONENT_NAME, UiCheckboxTestLocator } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';

@Component({
  name: COMPONENT_NAME,
  components: {
    ElProgress: Progress
  }
})
export default class extends mixins(TestId) {
  readonly testLocators = UiCheckboxTestLocator;

  //
}
