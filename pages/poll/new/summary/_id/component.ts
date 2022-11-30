import { Component, mixins } from 'nuxt-property-decorator';
import { Route } from 'vue-router';
import { COMPONENT_NAME, PollNewSummaryIdPagePageTextAttribute } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';
import { Translatable } from '~/components/shared/translatable';
import { uiButton } from '~/components/ui';
import { UiButtonView, UiButtonSize, UiButtonTheme } from '~/components/ui/button/component';
import { BrandBlock } from '~/components/brand';
import { BrandBlockSize } from '~/components/brand/component';
import { routes } from '~/shared/repository/routes';
import { RoutesName } from '~/shared/repository/routes/routes-name';
import { SummaryBlock } from '~/components/summary';
import { PollResponse } from '~/shared/repository/repo';
import { getPollIdRoute } from '~/shared/repository/routes/poll';

@Component({
  name: COMPONENT_NAME,
  components: {
    uiButton,
    BrandBlock,
    SummaryBlock
  }
})
export default class extends mixins(TestId, Translatable) {
  readonly textAttributes = PollNewSummaryIdPagePageTextAttribute;

  readonly projectRepository = this.$projectServices.projectRepository;
  readonly notifier = this.$projectServices.notification;

  readonly uiButtonView = UiButtonView;
  readonly uiButtonSize = UiButtonSize;
  readonly uiButtonTheme = UiButtonTheme;

  readonly brandBlockSize = BrandBlockSize;

  poll: PollResponse = null;

  isLoading = false;

  get pollsRoute(): Partial<Route> {
    return routes[RoutesName.polls];
  }

  get id(): string {
    return this.$route.params.id;
  }

  get pollIdRoute(): Partial<Route> {
    return getPollIdRoute(this.id);
  }

  get displayedPollName(): string {
    return this.poll ? this.poll.name : null;
  }

  get displayedCopyright(): string {
    return `© ${new Date().getFullYear()}`;
  }

  async created(): Promise<void> {
    try {
      this.isLoading = true;

      await this.getPoll();
    } catch (error) {
      this.notifier.showError();
    } finally {
      this.isLoading = false;
    }
  }

  async getPoll(): Promise<void> {
    this.poll = await this.projectRepository.getPoll(this.id);
  }
}
