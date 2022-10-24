import { Component, mixins } from 'nuxt-property-decorator';
import { Route } from 'vue-router';
import { COMPONENT_NAME, PollIdPagePageTextAttribute } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';
import { Translatable } from '~/components/shared/translatable';
import { uiButton } from '~/components/ui';
import { UiButtonView, UiButtonSize, UiButtonTheme } from '~/components/ui/button/component';
import { AvatarBlock } from '~/components/avatar';
import { TabLinks } from '~/components/tab-links';
import { AvatarBlockSize } from '~/components/avatar/component';
import { getPollSettingsIdRoute } from '~/shared/repository/routes/poll';

@Component({
  name: COMPONENT_NAME,
  components: {
    uiButton,
    AvatarBlock,
    TabLinks
  }
})
export default class extends mixins(TestId, Translatable) {
  readonly textAttributes = this.transAll(PollIdPagePageTextAttribute)

  readonly uiButtonView = UiButtonView;
  readonly uiButtonSize = UiButtonSize;
  readonly uiButtonTheme = UiButtonTheme;

  readonly avatarBlockSize = AvatarBlockSize;

  get id(): string {
    return this.$route.params.id;
  }

  get pollSettingsIdRoute(): Partial<Route> {
    return getPollSettingsIdRoute(this.id);
  }
}
