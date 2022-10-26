import { Component, mixins } from 'nuxt-property-decorator';
import { COMPONENT_NAME, ShareListTextAttribute, ShareListTestLocator } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';
import { Translatable } from '~/components/shared/translatable';
import { shareList } from '~/static-data/share-list/factory';
import { ShareListParams, ShareListType } from './model';
import { uiButton } from '~/components/ui';
import { UiButtonView, UiButtonSize, UiButtonTheme } from '../ui/button/component';
import { getPollNewJoinLinkIdRoute, getPollNewInviteIdRoute } from '~/shared/repository/routes/poll';
import { SharedBadge } from '~/components/shared/badge';
import { SharedColorTheme } from '~/components/shared/color/component';
import { SharedBadgeSize } from '~/components/shared/badge/component';

@Component({
  name: COMPONENT_NAME,
  components: {
    uiButton,
    SharedBadge
  }
})
export default class extends mixins(TestId, Translatable) {
  readonly textAttributes = this.transAll(ShareListTextAttribute);
  readonly testLocators = ShareListTestLocator;

  readonly uiButtonView = UiButtonView;
  readonly uiButtonSize = UiButtonSize;
  readonly uiButtonTheme = UiButtonTheme;

  readonly sharedColorTheme = SharedColorTheme;
  readonly sharedBadgeSize = SharedBadgeSize;

  readonly shareList: ShareListParams[] = shareList();

  get id(): string {
    return this.$route.params.id;
  }

  isSharedBadgeShown(type: ShareListType): boolean {
    return type === ShareListType.joinLink;
  }

  open(type: ShareListType): void {
    if (type === ShareListType.joinLink) {
      void this.$router.push(getPollNewJoinLinkIdRoute(this.id));
      return;
    }

    void this.$router.push(getPollNewInviteIdRoute(this.id));
  }
}
