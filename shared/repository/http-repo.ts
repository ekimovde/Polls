import axios, { AxiosInstance } from 'axios';
import { StoreGetters } from '~/store/model';
import { createFormDataFromObject } from '../utils/create-form-data-from-object';
import { ProjectRepository, SigninRequest, AccessTokens, ApiWrapper, RefreshTokenRequest, TranslationRequest, UserProgressResponse, PollResponse, ReactionResponse, PollMembersResponse, SelfInfoResponse, SignupRequest, SetUserInfoRequest, SetUserPasswordRequest, SetPollRequest, SendPollInviteRequest, UnsplashPhotoResponse, UnsplashPhotoRequest, JoinPollRequest, SetVoteInPollRequest } from './repo';
import { UrlGenerator } from './url-generator';
import { Translation } from '../services/translator';
import { PollVoteResults } from '~/components/poll/model';
import { getQueryForUnsplashResponse } from '../utils/get-query-for-unsplash-response';

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

  async signup(params: SignupRequest): Promise<AccessTokens> {
    const { data } = await this.axios
      .post<ApiWrapper<AccessTokens>>(this.urlGenerator.signup(), params, { skipAuth: true });

    return data.response;
  }

  async signin(params: SigninRequest): Promise<AccessTokens> {
    const { data } = await this.axios
      .post<ApiWrapper<AccessTokens>>(this.urlGenerator.signin(), params, { skipAuth: true });

    return data.response;
  }

  async logout(): Promise<void> {
    await this.axios.get<ApiWrapper<AccessTokens>>(this.urlGenerator.logout());
  }

  async refresh(params?: RefreshTokenRequest): Promise<AccessTokens> {
    const { data } = await this.axios
      .post<ApiWrapper<AccessTokens>>(this.urlGenerator.refresh(), params, { skipAuth: true });

    return data.response;
  }

  async getSelfInfo(): Promise<SelfInfoResponse> {
    const { data } = await this.axios.get<ApiWrapper<SelfInfoResponse>>(this.urlGenerator.getSelfInfo());

    return data.response;
  }

  async setUserInfo(params: SetUserInfoRequest): Promise<SelfInfoResponse> {
    const { data } = await this.axios.patch<ApiWrapper<SelfInfoResponse>>(this.urlGenerator.setUserInfo(), params);

    return data.response;
  }

  async setUserPassword(params: SetUserPasswordRequest): Promise<SelfInfoResponse> {
    const { data } = await this.axios.patch<ApiWrapper<SelfInfoResponse>>(this.urlGenerator.setUserPassword(), params);

    return data.response;
  }

  async setPoll(params: SetPollRequest): Promise<PollResponse> {
    const { data } = await this.axios.post<ApiWrapper<PollResponse>>(this.urlGenerator.setPoll(), params);

    return data.response;
  }

  async getPolls(scope?: string): Promise<PollResponse[]> {
    const { data } = await this.axios.post<ApiWrapper<PollResponse[]>>(this.urlGenerator.getPolls(), { scope });

    return data.response;
  }

  async getMyPolls(scope?: string): Promise<PollResponse[]> {
    const { data } = await this.axios.post<ApiWrapper<PollResponse[]>>(this.urlGenerator.getMyPolls(), { scope });

    return data.response;
  }

  async getPoll(id: string): Promise<PollResponse> {
    const { data } = await this.axios.get<ApiWrapper<PollResponse>>(this.urlGenerator.getPoll(id));

    return data.response;
  }

  async getPollMembers(id: string): Promise<PollMembersResponse[]> {
    const { data } = await this.axios.get<ApiWrapper<PollMembersResponse[]>>(this.urlGenerator.getPollMembers(id));

    return data.response;
  }

  async sendPollInvite(params: SendPollInviteRequest): Promise<void> {
    await this.axios.post<ApiWrapper<void>>(this.urlGenerator.sendPollInvite(), params);
  }

  async removePoll(id: string): Promise<void> {
    await this.axios.delete<ApiWrapper<void>>(this.urlGenerator.removePoll(id));
  }

  async endPoll(id: string): Promise<void> {
    await this.axios.get<ApiWrapper<void>>(this.urlGenerator.endPoll(id));
  }

  async updatePoll(id: string, params: SetPollRequest): Promise<void> {
    await this.axios.patch<ApiWrapper<void>>(this.urlGenerator.updatePoll(id), params);
  }

  async joinPoll(params: JoinPollRequest): Promise<void> {
    await this.axios.post<ApiWrapper<void>>(this.urlGenerator.joinPoll(), params);
  }

  async getPollVoteResults(id: string): Promise<PollVoteResults> {
    const { data } = await this.axios.get<ApiWrapper<PollVoteResults>>(this.urlGenerator.getPollVoteResults(id));

    return data.response;
  }

  async getPopularPolls(): Promise<PollResponse[]> {
    const { data } = await this.axios.get<ApiWrapper<PollResponse[]>>(this.urlGenerator.getPopularPolls());

    return data.response;
  }

  async setVoteInPoll(params: SetVoteInPollRequest): Promise<void> {
    await this.axios.post<ApiWrapper<void>>(this.urlGenerator.setVoteInPoll(), params);
  }

  async getUserProgress(): Promise<UserProgressResponse> {
    const { data } = await this.axios.get<ApiWrapper<UserProgressResponse>>(this.urlGenerator.getUserProgress());

    return data.response;
  }

  async getReactions(): Promise<ReactionResponse[]> {
    const { data } = await this.axios.get<ApiWrapper<ReactionResponse[]>>(this.urlGenerator.getReactions());

    return data.response;
  }

  async getUnsplashPhotos(params: UnsplashPhotoRequest): Promise<UnsplashPhotoResponse[]> {
    const { data } = await axios.get(`${this.urlGenerator.getUnsplashPhotos()}?${getQueryForUnsplashResponse(params)}`);

    return <UnsplashPhotoResponse[]>data;
  }

  async searchUnsplashPhotos(params: UnsplashPhotoRequest): Promise<UnsplashPhotoResponse[]> {
    const { data } = await axios
      .get(`${this.urlGenerator.searchUnsplashPhotos()}?${getQueryForUnsplashResponse(params)}`);

    return <UnsplashPhotoResponse[]>data.results;
  }
}
