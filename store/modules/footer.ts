import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators';

enum FooterMutation {
  SET_VISIBLE = 'SET_VISIBLE'
}

@Module({
  namespaced: true,
  stateFactory: true,
  name: 'footer'
})
export default class FooterModuleStore extends VuexModule {
  isVisible = false;

  @Mutation
  [FooterMutation.SET_VISIBLE](isVisible: boolean): void {
    this.isVisible = isVisible;
  }

  @Action({ rawError: true })
  setVisible(isVisible: boolean): void {
    this.SET_VISIBLE(isVisible);
  }
}
