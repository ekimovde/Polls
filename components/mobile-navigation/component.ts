import { Component, mixins } from 'nuxt-property-decorator';
import { Route } from 'vue-router';
import { COMPONENT_NAME, MobileNavigationTextAttribute, MobileNavigationTestLocator } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';
import { Translatable } from '~/components/shared/translatable';
import { AvatarBlock } from '~/components/avatar';
import { AvatarBlockSize } from '../avatar/component';
import { DropdownItemBase, DropdownItemTypeBase } from '~/shared/repository/constants';
import { UiButtonView, UiButtonSize, UiButtonTheme } from '../ui/button/component';
import { accountDropdownList, accountDropdownListForIndexPage } from '~/static-data/dropdown/factory';
import { uiButton } from '~/components/ui';
import { RoutesName } from '~/shared/repository/routes/routes-name';
import { routes } from '~/shared/repository/routes';
import { SocialLinks } from '~/components/social-links';
import { SelfInfoResponse } from '~/shared/repository/repo';

@Component({
  name: COMPONENT_NAME,
  components: {
    AvatarBlock,
    uiButton,
    SocialLinks
  }
})
export default class extends mixins(TestId, Translatable) {
  readonly textAttributes = MobileNavigationTextAttribute;
  readonly testLocators = MobileNavigationTestLocator;

  readonly userRepo = this.$projectServices.userRepo;

  readonly avatarBlockSize = AvatarBlockSize;

  readonly uiButtonView = UiButtonView;
  readonly uiButtonSize = UiButtonSize;
  readonly uiButtonTheme = UiButtonTheme;

  get isAuthorized(): boolean {
    return this.userRepo.isAuthorized;
  }

  get isIndexPage(): boolean {
    return this.$route.name === RoutesName.index;
  }

  get isUserInfoShown(): boolean {
    return this.isAuthorized && !this.isIndexPage;
  }

  get isStartAppButtonsShown(): boolean {
    return !this.isAuthorized && this.isIndexPage;
  }

  get isDashboardButtonShown(): boolean {
    return this.isAuthorized && this.isIndexPage;
  }

  get userInfo(): Partial<SelfInfoResponse> {
    return this.userRepo.user;
  }

  get authRoute(): Partial<Route> {
    return routes[RoutesName.auth];
  }

  get authRegistrationRoute(): Partial<Route> {
    return routes[RoutesName.authRegistration];
  }

  get dashboardRoute(): Partial<Route> {
    return routes[RoutesName.dashboard];
  }

  get displayedNavigationsList(): DropdownItemBase[][] {
    return this.isIndexPage
      ? accountDropdownListForIndexPage()
      : accountDropdownList();
  }

  get displayedUserName(): string {
    return this.userInfo ? this.userInfo.fullName : '';
  }

  get displayedUserNickName(): string {
    return this.userInfo ? this.userInfo.nickName : '';
  }

  async open(route: Route, type: DropdownItemTypeBase): Promise<void> {
    if (type === DropdownItemTypeBase.regular) {
      await this.userRepo.logout();
      return;
    }

    void this.$router.push({ name: route.name });
  }
}
