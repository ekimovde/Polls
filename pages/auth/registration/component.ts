import { Component, mixins } from 'nuxt-property-decorator';
import { Route } from 'vue-router';
import { COMPONENT_NAME, AuthRegistrationPageTextAttribute } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';
import { Translatable } from '~/components/shared/translatable';
import { uiInput, uiButton } from '~/components/ui';
import { UiInputSize, UiInputType } from '~/components/ui/input/component';
import { UiButtonView, UiButtonSize, UiButtonTheme } from '~/components/ui/button/component';
import { BrandBlock } from '~/components/brand';
import { BrandBlockSize } from '~/components/brand/component';
import { routes } from '~/shared/repository/routes';
import { RoutesName } from '~/shared/repository/routes/routes-name';

@Component({
  name: COMPONENT_NAME,
  components: {
    uiInput,
    uiButton,
    BrandBlock
  }
})
export default class extends mixins(TestId, Translatable) {
  readonly textAttributes = this.transAll(AuthRegistrationPageTextAttribute)

  readonly uiInputSize = UiInputSize;
  readonly uiInputType = UiInputType;

  readonly uiButtonView = UiButtonView;
  readonly uiButtonSize = UiButtonSize;
  readonly uiButtonTheme = UiButtonTheme;

  readonly brandBlockSize = BrandBlockSize;

  readonly picture = require('@assets/images/home-slide.png')

  get authLoginRoute(): Partial<Route> {
    return routes[RoutesName.authLogin];
  }

  get displayedCopyright(): string {
    return `© ${new Date().getFullYear()}`;
  }
}
