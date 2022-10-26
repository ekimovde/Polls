import { Component, mixins } from 'nuxt-property-decorator';
import { Route } from 'vue-router';
import { COMPONENT_NAME, MobileNavigationTextAttribute, MobileNavigationTestLocator } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';
import { Translatable } from '~/components/shared/translatable';
import { AvatarBlock } from '~/components/avatar';
import { AvatarBlockSize } from '../avatar/component';
import { DropdownItemBase, DropdownItemTypeBase } from '~/shared/repository/constants';
import { UiButtonView, UiButtonSize, UiButtonTheme } from '../ui/button/component';
import { accountDropdownList } from '~/static-data/dropdown/factory';
import { uiButton } from '~/components/ui';

@Component({
  name: COMPONENT_NAME,
  components: {
    AvatarBlock,
    uiButton
  }
})
export default class extends mixins(TestId, Translatable) {
  readonly textAttributes = this.transAll(MobileNavigationTextAttribute);
  readonly testLocators = MobileNavigationTestLocator;

  readonly avatarBlockSize = AvatarBlockSize;

  readonly uiButtonView = UiButtonView;
  readonly uiButtonSize = UiButtonSize;
  readonly uiButtonTheme = UiButtonTheme;

  readonly navigationList: DropdownItemBase[][] = accountDropdownList();

  open(route: Route, type: DropdownItemTypeBase): void {
    if (type === DropdownItemTypeBase.regular) {
      return;
    }

    void this.$router.push({ name: route.name });
  }
}
