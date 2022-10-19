/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import isEmpty from 'lodash/isEmpty';
import { $projectServices } from '~/shared/repository/initialize-project-services';
import { decodeJwtToken, ExtendedJwtPayload } from '~/shared/utils/decode-jwt-token';
import { AuthorizationRequest } from '~/shared/repository/repo';
import { Language } from '../model';
import { DEFAULT_COUNTRY_ID, DEFAULT_COUNTRY_CODE, DEFAULT_COUNTRY_TITLE } from '~/shared/repository/constants';

enum UserMutation {
  UPDATE_USER = 'UPDATE_USER',
  UPDATE_TOKENS = 'UPDATE_TOKENS',
  LOGOUT = 'LOGOUT'
}

interface State {
  user: string
  accessToken: string
  refreshToken: string
}

@Module({
  namespaced: true,
  stateFactory: true,
  name: 'user'
})
export default class UserModuleState extends VuexModule<State> {
  user = null;
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
  [UserMutation.UPDATE_USER](user: string): void {
    this.user = user;
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
    $nuxt.$router.push(RoutesName.auth);
  }

  @Action({ rawError: true })
  updateUser(user: string): void {
    this.UPDATE_USER(user);
  }

  @Action({ rawError: true })
  logout(): void {
    this.LOGOUT();
  }

  @Action({ rawError: true })
  async auth({ login, password }: AuthorizationRequest): Promise<void> {
    const JWTTokens = await $projectServices.projectRepository.auth({
      login, password
    });

    const { accessToken, refreshToken } = JWTTokens;

    this.UPDATE_TOKENS({ accessToken, refreshToken });

    // @ts-ignore
    await $nuxt.$router.push(routes[RoutesName.index]);
  }

  @Action({ rawError: true })
  async updateAccessToken(): Promise<void> {
    const JWTToken = await $projectServices.projectRepository.updateAccessToken({
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
