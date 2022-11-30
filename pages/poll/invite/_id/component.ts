import { Component, mixins } from 'nuxt-property-decorator';
import { Route } from 'vue-router';
import { COMPONENT_NAME, PollInviteIdPagePageTextAttribute } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';
import { Translatable } from '~/components/shared/translatable';
import { uiButton } from '~/components/ui';
import { UiButtonView, UiButtonSize, UiButtonTheme } from '~/components/ui/button/component';
import { SettingsShare } from '~/components/settings/share';
import { SettingsInvite } from '~/components/settings/invite';
import { getPollIdRoute } from '~/shared/repository/routes/poll';

@Component({
  name: COMPONENT_NAME,
  components: {
    uiButton,
    SettingsShare,
    SettingsInvite
  }
})
export default class extends mixins(TestId, Translatable) {
  readonly textAttributes = PollInviteIdPagePageTextAttribute;

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
