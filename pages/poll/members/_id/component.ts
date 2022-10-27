import { Component, mixins } from 'nuxt-property-decorator';
import { Route } from 'vue-router';
import { COMPONENT_NAME, PollMembersIdPagePageTextAttribute } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';
import { Translatable } from '~/components/shared/translatable';
import { uiButton } from '~/components/ui';
import { UiButtonView, UiButtonSize, UiButtonTheme } from '~/components/ui/button/component';
import { getPollIdRoute } from '~/shared/repository/routes/poll';
import { AvatarBlock } from '~/components/avatar';
import { AvatarBlockSize } from '~/components/avatar/component';
import { PollMembersResponse } from '~/shared/repository/repo';

@Component({
  name: COMPONENT_NAME,
  components: {
    uiButton,
    AvatarBlock
  }
})
export default class extends mixins(TestId, Translatable) {
  readonly textAttributes = this.transAll(PollMembersIdPagePageTextAttribute)

  readonly projectRepository = this.$projectServices.projectRepository;
  readonly notifier = this.$projectServices.notification;

  readonly uiButtonView = UiButtonView;
  readonly uiButtonSize = UiButtonSize;
  readonly uiButtonTheme = UiButtonTheme;

  readonly avatarBlockSize = AvatarBlockSize;

  pollMembers: PollMembersResponse[] = [];

  isLoading = false;

  get id(): string {
    return this.$route.params.id;
  }

  get pollIdRoute(): Partial<Route> {
    return getPollIdRoute(this.id);
  }

  async created(): Promise<void> {
    try {
      this.isLoading = true;

      await this.getPollMembers();
    } catch (error) {
      this.notifier.showError();
    } finally {
      this.isLoading = false;
    }
  }

  async getPollMembers(): Promise<void> {
    this.pollMembers = await this.projectRepository.getPollMembers(this.id);
  }
}
