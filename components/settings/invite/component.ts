import { Component, mixins } from 'nuxt-property-decorator';
import { COMPONENT_NAME, SettingsInviteTextAttribute, SettingsInviteTestLocator } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';
import { Translatable } from '~/components/shared/translatable';
import { uiTextarea, uiInput, uiButton } from '~/components/ui';
import { UiInputView, UiInputSize } from '~/components/ui/input/component';
import { UiButtonView, UiButtonSize, UiButtonTheme } from '~/components/ui/button/component';

@Component({
  name: COMPONENT_NAME,
  components: {
    uiTextarea,
    uiInput,
    uiButton
  }
})
export default class extends mixins(TestId, Translatable) {
  readonly textAttributes = this.transAll(SettingsInviteTextAttribute);
  readonly testLocators = SettingsInviteTestLocator;

  readonly uiInputView = UiInputView;
  readonly uiInputSize = UiInputSize;

  readonly uiButtonView = UiButtonView;
  readonly uiButtonSize = UiButtonSize;
  readonly uiButtonTheme = UiButtonTheme;

  note = '';
  email = '';
}
