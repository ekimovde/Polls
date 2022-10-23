import { Component, mixins } from 'nuxt-property-decorator';
import { Route } from 'vue-router';
import { COMPONENT_NAME, DashboardPageTextAttribute } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';
import { Translatable } from '~/components/shared/translatable';
import { ProgressBlock } from '~/components/progress';
import { UserProgressResponse, PollResponse, ReactionResponse } from '~/shared/repository/repo';
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
  readonly textAttributes = this.transAll(DashboardPageTextAttribute);

  readonly projectRepository = this.$projectServices.projectRepository;
  readonly notifier = this.$projectServices.notification;

  readonly pollBlockView = PollBlockView;

  readonly uiButtonView = UiButtonView;
  readonly uiButtonSize = UiButtonSize;
  readonly uiButtonTheme = UiButtonTheme;

  readonly reactionsBlockView = ReactionsBlockView;

  userProgress: UserProgressResponse[] = [];
  userPopularPolls: PollResponse[] = [];
  reactions: ReactionResponse[] = [];

  isLoading = false;

  get pollsRoute(): Partial<Route> {
    return routes[RoutesName.polls];
  }

  async created(): Promise<void> {
    try {
      this.isLoading = true;

      await Promise.allSettled([
        await this.getUserProgress(),
        await this.getUserPopularPolls(),
        await this.getReactions()
      ]);
    } catch (error) {
      this.notifier.showError();
    } finally {
      this.isLoading = false;
    }
  }

  async getUserProgress(): Promise<void> {
    this.userProgress = await this.projectRepository.getUserProgress();
  }

  async getUserPopularPolls(): Promise<void> {
    this.userPopularPolls = await this.projectRepository.getUserPopularPolls();
  }

  async getReactions(): Promise<void> {
    this.reactions = await this.projectRepository.getReactions();
  }
}
