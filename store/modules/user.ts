/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import isEmpty from 'lodash/isEmpty';
import { $projectServices } from '~/shared/repository/initialize-project-services';
import { decodeJwtToken, ExtendedJwtPayload } from '~/shared/utils/decode-jwt-token';
import { SigninRequest, SelfInfoResponse, SignupRequest } from '~/shared/repository/repo';
import { Language } from '../model';
import { DEFAULT_COUNTRY_ID, DEFAULT_COUNTRY_CODE, DEFAULT_COUNTRY_TITLE } from '~/shared/repository/constants';
import { RoutesName } from '~/shared/repository/routes/routes-name';

enum UserMutation {
  UPDATE_INFO = 'UPDATE_INFO',
  UPDATE_TOKENS = 'UPDATE_TOKENS',
  LOGOUT = 'LOGOUT'
}

interface State {
  user: SelfInfoResponse
  accessToken: string
  refreshToken: string
}

@Module({
  namespaced: true,
  stateFactory: true,
  name: 'user'
})
export default class UserModuleState extends VuexModule<State> {
  user: SelfInfoResponse = null;
  accessToken = null;
  refreshToken = null;

  language: Language = {
    id: DEFAULT_COUNTRY_ID,
    code: DEFAULT_COUNTRY_CODE,
    title: DEFAULT_COUNTRY_TITLE
  };

  get languageCode(): string {
    return this.language.code;
  }

  get decodedAccessToken(): ExtendedJwtPayload {
    return decodeJwtToken(this.accessToken);
  }

  get accessTokenExpires(): number {
    return this.decodedAccessToken?.exp;
  }

  get isAccessTokenValid(): (now: number) => boolean {
    return (now: number) => {
      return now < this.accessTokenExpires;
    };
  }

  get isAuthorized(): boolean {
    return !isEmpty(this.accessToken);
  }

  @Mutation
  [UserMutation.UPDATE_INFO](info: SelfInfoResponse): void {
    this.user = info;
  };

  @Mutation
  [UserMutation.UPDATE_TOKENS]({ accessToken, refreshToken = '' }: UserTokensParams): void {
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
  }

  @Mutation
  [UserMutation.LOGOUT](): void {
    this.accessToken = null;
    this.refreshToken = null;
    this.user = null;

    // @ts-ignore
    $nuxt.$router.push({ name: RoutesName.auth });
  }

  @Action({ rawError: true })
  updateInfo(info: SelfInfoResponse): void {
    this.UPDATE_INFO(info);
  }

  @Action({ rawError: true })
  async logout(): Promise<void> {
    await $projectServices.projectRepository.logout();

    this.LOGOUT();
  }

  @Action({ rawError: true })
  async signup(data: SignupRequest): Promise<void> {
    const JWTTokens = await $projectServices.projectRepository.signup(data);
    const { accessToken, refreshToken } = JWTTokens;

    this.UPDATE_TOKENS({ accessToken, refreshToken });

    // @ts-ignore
    await $nuxt.$router.push({ name: RoutesName.dashboard });
  }

  @Action({ rawError: true })
  async signin(data: SigninRequest): Promise<void> {
    const JWTTokens = await $projectServices.projectRepository.signin(data);
    const { accessToken, refreshToken } = JWTTokens;

    this.UPDATE_TOKENS({ accessToken, refreshToken });

    // @ts-ignore
    await $nuxt.$router.push({ name: RoutesName.dashboard });
  }

  @Action({ rawError: true })
  async refresh(): Promise<void> {
    const JWTToken = await $projectServices.projectRepository.refresh({
      refresh_token: this.refreshToken
    });

    const { accessToken, refreshToken } = JWTToken;

    this.UPDATE_TOKENS({ accessToken, refreshToken });
  }
}

export interface UserTokensParams {
  accessToken: string
  refreshToken: string
}
