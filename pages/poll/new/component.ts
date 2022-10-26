import { Component, mixins } from 'nuxt-property-decorator';
import { Route } from 'vue-router';
import { COMPONENT_NAME, PollNewPagePageTextAttribute } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';
import { Translatable } from '~/components/shared/translatable';
import { BrandBlock } from '~/components/brand';
import { uiInput, uiButton, uiSelect } from '~/components/ui';
import { BrandBlockSize } from '~/components/brand/component';
import { UiInputSize } from '~/components/ui/input/component';
import { UiButtonView, UiButtonSize, UiButtonTheme } from '~/components/ui/button/component';
import { routes } from '~/shared/repository/routes';
import { RoutesName } from '~/shared/repository/routes/routes-name';
import { UiSelectView } from '~/components/ui/select/component';
import { selectOptionsWithColors } from '~/static-data/select/factory';

@Component({
  name: COMPONENT_NAME,
  components: {
    BrandBlock,
    uiInput,
    uiButton,
    uiSelect
  }
})
export default class extends mixins(TestId, Translatable) {
  readonly textAttributes = this.transAll(PollNewPagePageTextAttribute)

  readonly brandBlockSize = BrandBlockSize;

  readonly uiInputSize = UiInputSize;

  readonly uiButtonView = UiButtonView;
  readonly uiButtonSize = UiButtonSize;
  readonly uiButtonTheme = UiButtonTheme;

  readonly uiSelectView = UiSelectView;

  readonly options = selectOptionsWithColors();

  name = '';
  colour = '';

  get pollsRoute(): Partial<Route> {
    return routes[RoutesName.polls];
  }

  get displayedCopyright(): string {
    return `© ${new Date().getFullYear()}`;
  }
}
