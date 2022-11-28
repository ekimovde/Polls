import { Component, mixins } from 'nuxt-property-decorator';
import { Route } from 'vue-router';
import { COMPONENT_NAME, DashboardPageTextAttribute } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';
import { Translatable } from '~/components/shared/translatable';
import { ProgressBlock } from '~/components/progress';
import { UserProgressResponse, PollResponse } from '~/shared/repository/repo';
import { PollBlock } from '~/components/poll';
import { PollBlockView } from '~/components/poll/component';
import { uiButton } from '~/components/ui';
import { UiButtonView, UiButtonSize, UiButtonTheme } from '~/components/ui/button/component';
import { routes } from '~/shared/repository/routes';
import { RoutesName } from '~/shared/repository/routes/routes-name';
import { ReactionsBlock } from '~/components/reactions';
import { ReactionsBlockView } from '~/components/reactions/component';

@Component({
  name: COMPONENT_NAME,
  components: {
    ProgressBlock,
    PollBlock,
    uiButton,
    ReactionsBlock
  }
})
export default class extends mixins(TestId, Translatable) {
  readonly textAttributes = DashboardPageTextAttribute;

  readonly projectRepository = this.$projectServices.projectRepository;
  readonly notifier = this.$projectServices.notification;
  readonly userRepo = this.$projectServices.userRepo;

  readonly pollBlockView = PollBlockView;

  readonly uiButtonView = UiButtonView;
  readonly uiButtonSize = UiButtonSize;
  readonly uiButtonTheme = UiButtonTheme;

  readonly reactionsBlockView = ReactionsBlockView;

  userProgressResponse: UserProgressResponse = null;
  popularPolls: PollResponse[] = [];
  // reactions: ReactionResponse[] = [];

  isLoading = false;

  get hasUserProgressResponse(): boolean {
    return Boolean(this.userProgressResponse);
  }

  get pollsRoute(): Partial<Route> {
    return routes[RoutesName.polls];
  }

  async created(): Promise<void> {
    try {
      this.isLoading = true;

      await Promise.allSettled([
        await this.getSelfInfo(),
        await this.getUserProgress(),
        await this.getPopularPolls()
        // await this.getReactions()
      ]);
    } catch (error) {
      this.notifier.showError();
    } finally {
      this.isLoading = false;
    }
  }

  async getSelfInfo(): Promise<void> {
    const userInfo = await this.projectRepository.getSelfInfo();

    this.userRepo.updateInfo(userInfo);
  }

  async getUserProgress(): Promise<void> {
    this.userProgressResponse = await this.projectRepository.getUserProgress();
  }

  async getPopularPolls(): Promise<void> {
    this.popularPolls = await this.projectRepository.getPopularPolls();
  }

  // async getReactions(): Promise<void> {
  //   this.reactions = await this.projectRepository.getReactions();
  // }
}
