import { Component, mixins } from 'nuxt-property-decorator';
import { COMPONENT_NAME, SettingsShareTextAttribute, SettingsShareTestLocator } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';
import { Translatable } from '~/components/shared/translatable';
import { uiInput } from '~/components/ui';
import { UiInputView, UiInputSize } from '~/components/ui/input/component';
import { SharedBadge } from '~/components/shared/badge';
import { SharedColorTheme } from '~/components/shared/color/component';
import { SharedBadgeSize } from '~/components/shared/badge/component';

@Component({
  name: COMPONENT_NAME,
  components: {
    uiInput,
    SharedBadge
  }
})
export default class extends mixins(TestId, Translatable) {
  readonly textAttributes = this.transAll(SettingsShareTextAttribute);
  readonly testLocators = SettingsShareTestLocator;

  readonly uiInputView = UiInputView;
  readonly uiInputSize = UiInputSize;

  readonly sharedColorTheme = SharedColorTheme;
  readonly sharedBadgeSize = SharedBadgeSize;
}
