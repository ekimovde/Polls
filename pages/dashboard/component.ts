import { Component, mixins } from 'nuxt-property-decorator';
import { COMPONENT_NAME, DashboardPageTextAttribute } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';
import { Translatable } from '~/components/shared/translatable';
import { ProgressBlock } from '~/components/progress';
import { UserProgressResponse, UserPopularPollsResponse } from '~/shared/repository/repo';
import { PollBlock } from '~/components/poll';

@Component({
  name: COMPONENT_NAME,
  components: {
    ProgressBlock,
    PollBlock
  }
})
export default class extends mixins(TestId, Translatable) {
  readonly textAttributes = this.transAll(DashboardPageTextAttribute)

  readonly projectRepository = this.$projectServices.projectRepository;
  readonly notifier = this.$projectServices.notification;

  userProgress: UserProgressResponse[] = [];
  userPopularPolls: UserPopularPollsResponse[] = [];

  isLoading = false;

  async created(): Promise<void> {
    try {
      this.isLoading = true;

      await Promise.allSettled([
        await this.getUserProgress(),
        await this.getUserPopularPolls()
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
}
