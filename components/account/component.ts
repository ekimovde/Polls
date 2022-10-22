import { Component, mixins } from 'nuxt-property-decorator';
import { Route } from 'vue-router';
import { COMPONENT_NAME, AccountBlockTextAttribute, AccountBlockTestLocator } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';
import { Translatable } from '~/components/shared/translatable';
import { uiButton, uiDropdown } from '~/components/ui';
import { UiButtonView, UiButtonSize, UiButtonTheme } from '../ui/button/component';
import { AvatarBlock } from '~/components/avatar';
import { UiDropdownPlacement } from '../ui/dropdown/component';
import { accountDropdownList } from '~/static-data/account/factory';
import { DropdownItemBase, DropdownItemTypeBase } from '~/shared/repository/constants';

@Component({
  name: COMPONENT_NAME,
  components: {
    uiButton,
    uiDropdown,
    AvatarBlock
  }
})
export default class extends mixins(TestId, Translatable) {
  readonly textAttributes = this.transAll(AccountBlockTextAttribute);
  readonly testLocators = AccountBlockTestLocator;

  readonly uiButtonView = UiButtonView;
  readonly uiButtonSize = UiButtonSize;
  readonly uiButtonTheme = UiButtonTheme;

  readonly uiDropdownPlacement = UiDropdownPlacement;

  readonly accountDropdownList: DropdownItemBase[][] = accountDropdownList();

  isVisible = false;

  open(route: Route, type: DropdownItemTypeBase): void {
    if (type === DropdownItemTypeBase.logout) {
      return;
    }

    void this.$router.push({ name: route.name });
  }
}
