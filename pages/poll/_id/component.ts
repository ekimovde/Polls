import { Component, mixins } from 'nuxt-property-decorator';
import { Route } from 'vue-router';
import { COMPONENT_NAME, PollIdPagePageTextAttribute } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';
import { Translatable } from '~/components/shared/translatable';
import { uiButton, uiDropdown } from '~/components/ui';
import { UiButtonView, UiButtonSize, UiButtonTheme } from '~/components/ui/button/component';
import { AvatarBlock } from '~/components/avatar';
import { TabLinks } from '~/components/tab-links';
import { AvatarBlockSize } from '~/components/avatar/component';
import { getPollSettingsIdRoute } from '~/shared/repository/routes/poll';
import { pollSettingsDropdownList } from '~/static-data/dropdown/factory';
import { DropdownItemTypeBase } from '~/shared/repository/constants';

@Component({
  name: COMPONENT_NAME,
  components: {
    uiButton,
    AvatarBlock,
    TabLinks,
    uiDropdown
  }
})
export default class extends mixins(TestId, Translatable) {
  readonly textAttributes = this.transAll(PollIdPagePageTextAttribute)

  readonly uiButtonView = UiButtonView;
  readonly uiButtonSize = UiButtonSize;
  readonly uiButtonTheme = UiButtonTheme;

  readonly avatarBlockSize = AvatarBlockSize;

  readonly dropdownList = pollSettingsDropdownList();

  isVisible = false;

  get id(): string {
    return this.$route.params.id;
  }

  get pollSettingsIdRoute(): Partial<Route> {
    return getPollSettingsIdRoute(this.id);
  }

  toggleVisible(): void {
    this.isVisible = !this.isVisible;
  }

  open(route: Route, type: DropdownItemTypeBase): void {
    this.isVisible = false;

    if (type === DropdownItemTypeBase.regular) {
      return;
    }

    void this.$router.push({ name: route.name, params: { id: this.id } });
  }
}
