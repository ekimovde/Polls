import { Component, mixins } from 'nuxt-property-decorator';
import { Route } from 'vue-router';
import { COMPONENT_NAME, AuthLoginPageTextAttribute } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';
import { Translatable } from '~/components/shared/translatable';
import { BrandBlock } from '~/components/brand';
import { BrandBlockSize } from '~/components/brand/component';
import { uiInput, uiButton } from '~/components/ui';
import { UiInputSize } from '~/components/ui/input/component';
import { UiButtonView, UiButtonSize, UiButtonTheme } from '~/components/ui/button/component';
import { RoutesName } from '~/shared/repository/routes/routes-name';
import { routes } from '~/shared/repository/routes';

@Component({
  name: COMPONENT_NAME,
  components: {
    BrandBlock,
    uiInput,
    uiButton
  }
})
export default class extends mixins(TestId, Translatable) {
  readonly textAttributes = this.transAll(AuthLoginPageTextAttribute)

  readonly brandBlockSize = BrandBlockSize;

  readonly uiInputSize = UiInputSize;

  readonly uiButtonView = UiButtonView;
  readonly uiButtonSize = UiButtonSize;
  readonly uiButtonTheme = UiButtonTheme;

  get authRegistrationRoute(): Partial<Route> {
    return routes[RoutesName.authRegistration];
  }

  get displayedCopyright(): string {
    return `© ${new Date().getFullYear()}`;
  }
}
