import { Component, mixins } from 'nuxt-property-decorator';
import { COMPONENT_NAME, AccountProfilePageTextAttribute } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';
import { Translatable } from '~/components/shared/translatable';
import { uiInput, uiButton } from '~/components/ui';
import { UiButtonView, UiButtonSize, UiButtonTheme } from '~/components/ui/button/component';
import { LinkList } from '~/components/link-list';
import { UiInputSize } from '~/components/ui/input/component';

@Component({
  name: COMPONENT_NAME,
  components: {
    uiInput,
    uiButton,
    LinkList
  }
})
export default class extends mixins(TestId, Translatable) {
  readonly textAttributes = this.transAll(AccountProfilePageTextAttribute)

  readonly uiButtonView = UiButtonView;
  readonly uiButtonSize = UiButtonSize;
  readonly uiButtonTheme = UiButtonTheme;

  readonly uiInputSize = UiInputSize;
}
