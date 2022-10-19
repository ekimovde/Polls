import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators';

enum LoaderMutation
{
  SHOW = 'SHOW',
  HIDE = 'HIDE',
  PENDING = 'PENDING',
  DONE = 'DONE'
}

@Module({
  namespaced: true,
  stateFactory: true,
  name: 'loader'
})
export default class LoaderModuleStore extends VuexModule {
  isPageLoading = false;
  requestsPending = 0;

  get isLoading(): boolean {
    return this.isPageLoading;
  }

  @Mutation
  [LoaderMutation.SHOW](): void {
    this.isPageLoading = true;
  }

  @Mutation
  [LoaderMutation.HIDE](): void {
    this.isPageLoading = false;
  }

  @Mutation
  [LoaderMutation.PENDING](): void {
    if (this.requestsPending === 0) {
      this.isPageLoading = true;
    }

    this.requestsPending++;
  }

  @Mutation
  [LoaderMutation.DONE](): void {
    if (this.requestsPending >= 1) {
      this.requestsPending--;
    }

    if (this.requestsPending <= 0) {
      this.isPageLoading = false;
    }
  }

  @Action({ rawError: true })
  show(): void {
    this.context.commit(LoaderMutation.SHOW);
  }

  @Action({ rawError: true })
  hide(): void {
    this.context.commit(LoaderMutation.HIDE);
  }

  @Action({ rawError: true })
  pending(): void {
    this.context.commit(LoaderMutation.PENDING);
  }

  @Action({ rawError: true })
  done(): void {
    this.context.commit(LoaderMutation.DONE);
  }
}
