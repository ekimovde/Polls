import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators';
import { HeaderBlockView } from '~/components/header/component';

enum HeaderMutation {
  SET_VISIBLE = 'SET_VISIBLE',
  SET_MOBILE_NAV_VISIBLE = 'SET_MOBILE_NAV_VISIBLE',
  SET_VIEW = 'SET_VIEW'
}

@Module({
  namespaced: true,
  stateFactory: true,
  name: 'header'
})
export default class HeaderModuleStore extends VuexModule {
  isVisible = false;
  isMovileNavigationVisible = false;

  view: HeaderBlockView = HeaderBlockView.default;

  @Mutation
  [HeaderMutation.SET_VISIBLE](isVisible: boolean): void {
    this.isVisible = isVisible;
  }

  @Mutation
  [HeaderMutation.SET_MOBILE_NAV_VISIBLE](isMovileNavigationVisible: boolean): void {
    this.isMovileNavigationVisible = isMovileNavigationVisible;
  }

  @Mutation
  [HeaderMutation.SET_VIEW](view: HeaderBlockView): void {
    this.view = view;
  }

  @Action({ rawError: true })
  setVisible(isVisible: boolean): void {
    this.SET_VISIBLE(isVisible);
  }

  @Action({ rawError: true })
  setMobileNavVisible(isMovileNavigationVisible: boolean): void {
    this.SET_MOBILE_NAV_VISIBLE(isMovileNavigationVisible);
  }

  @Action({ rawError: true })
  setView(view: HeaderBlockView): void {
    this.SET_VIEW(view);
  }
}
