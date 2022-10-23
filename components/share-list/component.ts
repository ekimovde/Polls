import { Component, mixins } from 'nuxt-property-decorator';
import { COMPONENT_NAME, ShareListTextAttribute, ShareListTestLocator } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';
import { Translatable } from '~/components/shared/translatable';
import { shareList } from '~/static-data/share-list/factory';
import { ShareListParams, ShareListType } from './model';
import { uiButton } from '~/components/ui';
import { UiButtonView, UiButtonSize, UiButtonTheme } from '../ui/button/component';
import { getPollNewJoinLinkIdRoute, getPollNewInviteIdRoute } from '~/shared/repository/routes/poll';

@Component({
  name: COMPONENT_NAME,
  components: {
    uiButton
  }
})
export default class extends mixins(TestId, Translatable) {
  readonly textAttributes = this.transAll(ShareListTextAttribute);
  readonly testLocators = ShareListTestLocator;

  readonly uiButtonView = UiButtonView;
  readonly uiButtonSize = UiButtonSize;
  readonly uiButtonTheme = UiButtonTheme;

  readonly shareList: ShareListParams[] = shareList();

  get id(): string {
    return this.$route.params.id;
  }

  open(type: ShareListType): void {
    if (type === ShareListType.joinLink) {
      void this.$router.push(getPollNewJoinLinkIdRoute(this.id));
      return;
    }

    void this.$router.push(getPollNewInviteIdRoute(this.id));
  }
}
