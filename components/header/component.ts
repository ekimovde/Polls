import { Component, mixins } from 'nuxt-property-decorator';
import { Route } from 'vue-router';
import { COMPONENT_NAME, HeaderBlockTextAttribute, HeaderBlockTestLocator } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';
import { Translatable } from '~/components/shared/translatable';
import { BrandBlock } from '~/components/brand/index';
import { NavigationBlock } from '~/components/navigation/index';
import { AccountBlock } from '~/components/account';
import { MobileNavigation } from '~/components/mobile-navigation';
import { uiButton } from '~/components/ui';
import { UiButtonView, UiButtonSize, UiButtonTheme } from '../ui/button/component';
import { routes } from '~/shared/repository/routes';
import { RoutesName } from '~/shared/repository/routes/routes-name';

export enum HeaderBlockView {
  default = 'default',
  regular = 'regular'
}

export enum HeaderBlockBreackpoints {
  mobile = 800
}

@Component({
  name: COMPONENT_NAME,
  components: {
    BrandBlock,
    NavigationBlock,
    AccountBlock,
    MobileNavigation,
    uiButton
  }
})
export default class extends mixins(TestId, Translatable) {
  readonly textAttributes = this.transAll(HeaderBlockTextAttribute);
  readonly testLocators = HeaderBlockTestLocator;

  readonly headerRepo = this.$projectServices.headerRepo;
  readonly userRepo = this.$projectServices.userRepo;

  readonly uiButtonView = UiButtonView;
  readonly uiButtonSize = UiButtonSize;
  readonly uiButtonTheme = UiButtonTheme;

  get isVisible(): boolean {
    return this.headerRepo.isMovileNavigationVisible;
  }

  get isAuthorized(): boolean {
    return this.userRepo.isAuthorized;
  }

  get isIndexPage(): boolean {
    return this.$route.name === RoutesName.index;
  }

  get isButtonDashboardShown(): boolean {
    return this.isAuthorized && this.isIndexPage;
  }

  get isAccountBlockShown(): boolean {
    return this.isAuthorized && !this.isIndexPage;
  }

  get isButtonAuthShown(): boolean {
    return !this.isAuthorized && this.isIndexPage;
  }

  get view(): HeaderBlockView {
    return this.headerRepo.view;
  }

  get theme(): UiButtonTheme {
    return this.isVisible ? this.uiButtonTheme.purple : this.uiButtonTheme.grey;
  }

  get dashboardRoute(): Partial<Route> {
    return routes[RoutesName.dashboard];
  }

  get authRoute(): Partial<Route> {
    return routes[RoutesName.auth];
  }

  mounted(): void {
    void this.registerEventListeners();
  }

  toggleVisible(): void {
    this.headerRepo.setMobileNavVisible(!this.isVisible);
  }

  setVisible(): void {
    const { clientWidth } = document.body;

    if (clientWidth <= HeaderBlockBreackpoints.mobile && this.isVisible) {
      return;
    }

    this.headerRepo.setMobileNavVisible(false);
  }

  registerEventListeners(): void {
    window.addEventListener('resize', () => {
      void this.setVisible();
    }, false);
  }

  destroyed(): void {
    window.removeEventListener('resize', () => {
      void this.setVisible();
    }, false);
  }
}
