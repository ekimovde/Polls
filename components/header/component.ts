import { Component, mixins } from 'nuxt-property-decorator';
import { COMPONENT_NAME, HeaderBlockTextAttribute, HeaderBlockTestLocator } from './attributes';
import TestId from '~/shared/utils/unit-test/test-id';
import { Translatable } from '~/components/shared/translatable';
import { BrandBlock } from '~/components/brand/index';
import { NavigationBlock } from '~/components/navigation/index';
import { AccountBlock } from '~/components/account';
import { MobileNavigation } from '~/components/mobile-navigation';
import { uiButton } from '~/components/ui';
import { UiButtonView, UiButtonSize, UiButtonTheme } from '../ui/button/component';

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

  readonly uiButtonView = UiButtonView;
  readonly uiButtonSize = UiButtonSize;
  readonly uiButtonTheme = UiButtonTheme;

  get isVisible(): boolean {
    return this.headerRepo.isMovileNavigationVisible;
  }

  get view(): HeaderBlockView {
    return this.headerRepo.view;
  }

  get theme(): UiButtonTheme {
    return this.isVisible ? this.uiButtonTheme.purple : this.uiButtonTheme.grey;
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
