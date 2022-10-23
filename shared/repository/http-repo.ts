import { AxiosInstance } from 'axios';
import { StoreGetters } from '~/store/model';
import { createFormDataFromObject } from '../utils/create-form-data-from-object';
import { ProjectRepository, AuthorizationRequest, AccessTokens, ApiWrapper, UpdateAccessTokenRequest, TranslationRequest, UserProgressResponse, PollResponse } from './repo';
import { UrlGenerator } from './url-generator';
import { Translation } from '../services/translator';

export class HttpRepo implements ProjectRepository {
  constructor(
    private readonly axios: AxiosInstance,
    private readonly urlGenerator: UrlGenerator,
    private readonly store: StoreGetters
  ) {}

  async getTranslation(params: TranslationRequest): Promise<string> {
    const payload = createFormDataFromObject({ ...params });
    const { data } = await this.axios.post<ApiWrapper<string>>(this.urlGenerator.getTranslation(), payload);

    return data.response;
  }

  async getTranslationList(): Promise<Translation[]> {
    const payload = createFormDataFromObject();
    const { data } = await this.axios
      .post<ApiWrapper<Translation[]>>(this.urlGenerator.getTranslationList(), payload, { showLoader: true });

    return data.response;
  }

  async auth(params?: AuthorizationRequest): Promise<AccessTokens> {
    const payload = createFormDataFromObject({ ...params });
    const { data } = await this.axios
      .post<ApiWrapper<AccessTokens>>(this.urlGenerator.auth(), payload, { skipAuth: true });

    return data.response;
  }

  async updateAccessToken(params?: UpdateAccessTokenRequest): Promise<AccessTokens> {
    const payload = createFormDataFromObject({ ...params });
    const { data } = await this.axios
      .post<ApiWrapper<AccessTokens>>(this.urlGenerator.updateAccessToken(), payload, { skipAuth: true });

    return data.response;
  }

  async getUserProgress(): Promise<UserProgressResponse[]> {
    const { data } = await this.axios.get<ApiWrapper<UserProgressResponse[]>>(this.urlGenerator.getUserProgress());

    return data.response;
  }

  async getUserPopularPolls(): Promise<PollResponse[]> {
    const { data } = await this.axios
      .get<ApiWrapper<PollResponse[]>>(this.urlGenerator.getUserPopularPolls());

    return data.response;
  }

  async getPolls(): Promise<PollResponse[]> {
    const { data } = await this.axios.get<ApiWrapper<PollResponse[]>>(this.urlGenerator.getPolls());

    return data.response;
  }
}
