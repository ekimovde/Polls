import { Component, mixins } from 'nuxt-property-decorator';
import { Route } from 'vue-router';
import { COMPONENT_NAME, PollsPagePageTextAttribute } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';
import { Translatable } from '~/components/shared/translatable';
import { uiButton } from '~/components/ui';
import { UiButtonView, UiButtonSize, UiButtonTheme } from '~/components/ui/button/component';
import { PollBlockView } from '~/components/poll/component';
import { PollResponse } from '~/shared/repository/repo';
import { PollBlock } from '~/components/poll';
import { routes } from '~/shared/repository/routes';
import { RoutesName } from '~/shared/repository/routes/routes-name';

@Component({
  name: COMPONENT_NAME,
  components: {
    uiButton,
    PollBlock
  }
})
export default class extends mixins(TestId, Translatable) {
  readonly textAttributes = this.transAll(PollsPagePageTextAttribute);

  readonly projectRepository = this.$projectServices.projectRepository;
  readonly notifier = this.$projectServices.notification;

  readonly uiButtonView = UiButtonView;
  readonly uiButtonSize = UiButtonSize;
  readonly uiButtonTheme = UiButtonTheme;

  readonly pollBlockView = PollBlockView;

  polls: PollResponse[] = [];

  isLoading = false;

  get pollNewRoute(): Partial<Route> {
    return routes[RoutesName.pollNew];
  }

  async created(): Promise<void> {
    try {
      await this.getPolls();
    } catch (error) {
      this.notifier.showError();
    } finally {
      this.isLoading = false;
    }
  }

  async getPolls(): Promise<void> {
    this.polls = await this.projectRepository.getPolls();
  }
}
