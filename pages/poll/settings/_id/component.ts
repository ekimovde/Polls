import { Component, mixins } from 'nuxt-property-decorator';
import { Route } from 'vue-router';
import { COMPONENT_NAME, PollSettingsIdPagePageTextAttribute } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';
import { Translatable } from '~/components/shared/translatable';
import { uiInput, uiSelect, uiButton } from '~/components/ui';
import { UiInputSize } from '~/components/ui/input/component';
import { UiButtonView, UiButtonSize, UiButtonTheme } from '~/components/ui/button/component';
import { getPollIdRoute } from '~/shared/repository/routes/poll';

@Component({
  name: COMPONENT_NAME,
  components: {
    uiInput,
    uiSelect,
    uiButton
  }
})
export default class extends mixins(TestId, Translatable) {
  readonly textAttributes = this.transAll(PollSettingsIdPagePageTextAttribute)

  readonly uiInputSize = UiInputSize;

  readonly uiButtonView = UiButtonView;
  readonly uiButtonSize = UiButtonSize;
  readonly uiButtonTheme = UiButtonTheme;

  get id(): string {
    return this.$route.params.id;
  }

  get pollIdRoute(): Partial<Route> {
    return getPollIdRoute(this.id);
  }
}
