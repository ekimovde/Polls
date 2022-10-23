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

@Component({
  name: COMPONENT_NAME,
  components: {
    uiButton,
    BrandBlock,
    SummaryBlock
  }
})
export default class extends mixins(TestId, Translatable) {
  readonly textAttributes = this.transAll(PollNewSummaryIdPagePageTextAttribute)

  readonly uiButtonView = UiButtonView;
  readonly uiButtonSize = UiButtonSize;
  readonly uiButtonTheme = UiButtonTheme;

  readonly brandBlockSize = BrandBlockSize;

  get pollsRoute(): Partial<Route> {
    return routes[RoutesName.polls];
  }

  get id(): string {
    return this.$route.params.id;
  }

  get displayedCopyright(): string {
    return `© ${new Date().getFullYear()}`;
  }
}
