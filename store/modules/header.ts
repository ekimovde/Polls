import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators';

enum HeaderMutation {
  SET_VISIBLE = 'SET_VISIBLE'
}

@Module({
  namespaced: true,
  stateFactory: true,
  name: 'header'
})
export default class HeaderModuleStore extends VuexModule {
  isVisible = false;

  @Mutation
  [HeaderMutation.SET_VISIBLE](isVisible: boolean): void {
    this.isVisible = isVisible;
  }

  @Action({ rawError: true })
  setVisible(isVisible: boolean): void {
    this.SET_VISIBLE(isVisible);
  }
}
