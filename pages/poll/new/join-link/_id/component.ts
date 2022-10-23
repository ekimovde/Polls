import { Component, mixins } from 'nuxt-property-decorator';
import { Route } from 'vue-router';
import { COMPONENT_NAME, PollNewJoinLinkIdPagePageTextAttribute } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';
import { Translatable } from '~/components/shared/translatable';
import { BrandBlock } from '~/components/brand';
import { uiButton, uiInput } from '~/components/ui';
import { BrandBlockSize } from '~/components/brand/component';
import { UiButtonView, UiButtonSize, UiButtonTheme } from '~/components/ui/button/component';
import { routes } from '~/shared/repository/routes';
import { RoutesName } from '~/shared/repository/routes/routes-name';
import { getPollNewSummaryIdRoute } from '~/shared/repository/routes/poll';
import { UiInputSize } from '~/components/ui/input/component';

@Component({
  name: COMPONENT_NAME,
  components: {
    BrandBlock,
    uiButton,
    uiInput
  }
})
export default class extends mixins(TestId, Translatable) {
  readonly textAttributes = this.transAll(PollNewJoinLinkIdPagePageTextAttribute)

  readonly brandBlockSize = BrandBlockSize;

  readonly uiButtonView = UiButtonView;
  readonly uiButtonSize = UiButtonSize;
  readonly uiButtonTheme = UiButtonTheme;

  readonly uiInputSize = UiInputSize;

  get id(): string {
    return this.$route.params.id;
  }

  get pollsRoute(): Partial<Route> {
    return routes[RoutesName.polls];
  }

  get pollNewSummaryIdRoute(): Partial<Route> {
    return getPollNewSummaryIdRoute(this.id);
  }

  get displayedCopyright(): string {
    return `© ${new Date().getFullYear()}`;
  }
}
