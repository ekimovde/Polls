import { Component, mixins } from 'nuxt-property-decorator';
import { COMPONENT_NAME, PollSettingsPagePageTextAttribute } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';
import { Translatable } from '~/components/shared/translatable';
import { uiInput, uiSelect, uiButton } from '~/components/ui';
import { UiInputSize } from '~/components/ui/input/component';
import { UiButtonView, UiButtonSize, UiButtonTheme } from '~/components/ui/button/component';

@Component({
  name: COMPONENT_NAME,
  components: {
    uiInput,
    uiSelect,
    uiButton
  }
})
export default class extends mixins(TestId, Translatable) {
  readonly textAttributes = this.transAll(PollSettingsPagePageTextAttribute)

  readonly uiInputSize = UiInputSize;

  readonly uiButtonView = UiButtonView;
  readonly uiButtonSize = UiButtonSize;
  readonly uiButtonTheme = UiButtonTheme;
}
