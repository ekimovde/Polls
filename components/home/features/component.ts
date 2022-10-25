import { Component, mixins } from 'nuxt-property-decorator';
import { COMPONENT_NAME, HomeFeaturesTextAttribute, HomeFeaturesTestLocator } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';
import { Translatable } from '~/components/shared/translatable';
import { uiButton } from '~/components/ui';
import { UiButtonView, UiButtonSize, UiButtonTheme } from '~/components/ui/button/component';
import { HomeFeature } from '../model';
import { fakeFeatures } from '~/static-data/home/features/factory';

@Component({
  name: COMPONENT_NAME,
  components: {
    uiButton
  }
})
export default class extends mixins(TestId, Translatable) {
  readonly textAttributes = this.transAll(HomeFeaturesTextAttribute);
  readonly testLocators = HomeFeaturesTestLocator;

  readonly uiButtonView = UiButtonView;
  readonly uiButtonSize = UiButtonSize;
  readonly uiButtonTheme = UiButtonTheme;

  readonly fakeFeatures: HomeFeature[] = fakeFeatures();
}
