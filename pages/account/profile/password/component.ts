import { Component, mixins } from 'nuxt-property-decorator';
import { COMPONENT_NAME, AccountProfilePasswordPageTextAttribute } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';
import { Translatable } from '~/components/shared/translatable';
import { uiButton, uiInput } from '~/components/ui';
import { UiButtonView, UiButtonSize, UiButtonTheme } from '~/components/ui/button/component';
import { UiInputType } from '~/components/ui/input/component';

@Component({
  name: COMPONENT_NAME,
  components: {
    uiButton,
    uiInput
  }
})
export default class extends mixins(TestId, Translatable) {
  readonly textAttributes = this.transAll(AccountProfilePasswordPageTextAttribute)

  readonly uiButtonView = UiButtonView;
  readonly uiButtonSize = UiButtonSize;
  readonly uiButtonTheme = UiButtonTheme;

  readonly uiInputType = UiInputType;
}
