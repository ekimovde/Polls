import { Component, mixins } from 'nuxt-property-decorator';
import { Route } from 'vue-router';
import { COMPONENT_NAME, PollNewShareIdPagePageTextAttribute } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';
import { Translatable } from '~/components/shared/translatable';
import { BrandBlock } from '~/components/brand';
import { uiButton } from '~/components/ui';
import { BrandBlockSize } from '~/components/brand/component';
import { UiButtonView, UiButtonSize, UiButtonTheme } from '~/components/ui/button/component';
import { routes } from '~/shared/repository/routes';
import { RoutesName } from '~/shared/repository/routes/routes-name';
import { ShareList } from '~/components/share-list';
import { PollResponse } from '~/shared/repository/repo';

@Component({
  name: COMPONENT_NAME,
  components: {
    BrandBlock,
    uiButton,
    ShareList
  }
})
export default class extends mixins(TestId, Translatable) {
  readonly textAttributes = this.transAll(PollNewShareIdPagePageTextAttribute)

  readonly projectRepository = this.$projectServices.projectRepository;
  readonly notifier = this.$projectServices.notification;

  readonly brandBlockSize = BrandBlockSize;

  readonly uiButtonView = UiButtonView;
  readonly uiButtonSize = UiButtonSize;
  readonly uiButtonTheme = UiButtonTheme;

  poll: PollResponse = null;

  isLoading = false;

  get id(): string {
    return this.$route.params.id;
  }

  get pollsRoute(): Partial<Route> {
    return routes[RoutesName.polls];
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
