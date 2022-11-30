import { Component, mixins } from 'nuxt-property-decorator';
import { Route } from 'vue-router';
import { COMPONENT_NAME, PollEmptyBannerTextAttribute, PollEmptyBannerTestLocator } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';
import { Translatable } from '~/components/shared/translatable';
import { uiButton } from '~/components/ui';
import { UiButtonView, UiButtonSize, UiButtonTheme } from '~/components/ui/button/component';
import { routes } from '~/shared/repository/routes';
import { RoutesName } from '~/shared/repository/routes/routes-name';

@Component({
  name: COMPONENT_NAME,
  components: {
    uiButton
  }
})
export default class extends mixins(TestId, Translatable) {
  readonly textAttributes = PollEmptyBannerTextAttribute;
  readonly testLocators = PollEmptyBannerTestLocator;

  readonly uiButtonView = UiButtonView;
  readonly uiButtonSize = UiButtonSize;
  readonly uiButtonTheme = UiButtonTheme;

  get pollNewRoute(): Partial<Route> {
    return routes[RoutesName.pollNew];
  }
}
