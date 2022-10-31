import { Component, mixins } from 'nuxt-property-decorator';
import { Route } from 'vue-router';
import { COMPONENT_NAME, AccountBlockTextAttribute, AccountBlockTestLocator } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';
import { Translatable } from '~/components/shared/translatable';
import { uiButton, uiDropdown } from '~/components/ui';
import { UiButtonView, UiButtonSize, UiButtonTheme } from '../ui/button/component';
import { AvatarBlock } from '~/components/avatar';
import { DropdownItemBase, DropdownItemTypeBase } from '~/shared/repository/constants';
import { AvatarBlockSize } from '../avatar/component';
import { accountDropdownList } from '~/static-data/dropdown/factory';

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

  readonly userRepo = this.$projectServices.userRepo;

  readonly uiButtonView = UiButtonView;
  readonly uiButtonSize = UiButtonSize;
  readonly uiButtonTheme = UiButtonTheme;

  readonly avatarBlockSize = AvatarBlockSize;

  readonly dropdownList: DropdownItemBase[][] = accountDropdownList();

  isVisible = false;

  toggleVisible(): void {
    this.isVisible = !this.isVisible;
  }

  async open(route: Route, type: DropdownItemTypeBase): Promise<void> {
    this.isVisible = false;

    if (type === DropdownItemTypeBase.regular) {
      await this.userRepo.logout();
      return;
    }

    void this.$router.push({ name: route.name });
  }
}
