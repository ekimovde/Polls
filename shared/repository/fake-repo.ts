import { respondMockResult } from '../utils/respond-mock-result';
import { consoleLogMethodCalls } from '../utils/unit-test/console-log-method-calls';
import {
  AccessTokens,
  SigninRequest,
  ProjectRepository,
  RefreshTokenRequest,
  TranslationRequest,
  UserProgressResponse,
  PollResponse,
  ReactionResponse,
  PollMembersResponse,
  SelfInfoResponse,
  SignupRequest,
  SetUserInfoRequest,
  SetUserPasswordRequest,
  SetPollRequest,
  SendPollInviteRequest,
  UnsplashPhotoResponse,
  UnsplashPhotoRequest,
  JoinPollRequest
} from './repo';
import { translationResponse } from './fixtures/translation';
import { translationsResponse } from './fixtures/translations';
import { Translation } from '../services/translator';
import { fakeUserProgressResponse } from './fixtures/fake-user-progress';
import { fakePolls, fakePoll } from './fixtures/fake-polls';
import { fakeReactions } from './fixtures/fake-reactions';
import { fakePollMembers } from './fixtures/fake-poll-members';
import { fakeSelfInfo } from './fixtures/fake-self-info';
import { fakeTokens } from './fixtures/fake-tokens';
import { PollQuestionAnswer } from '~/components/poll/model';
import { fakePollAnswers } from './fixtures/fake-poll-answers';
import { fakeUnsplashPhotos } from './fixtures/fake-unsplash-photos';

export class FakeRepo implements ProjectRepository {
  static create(): ProjectRepository {
    return consoleLogMethodCalls(new FakeRepo());
  }

  async getTranslation(params: TranslationRequest): Promise<string> {
    return respondMockResult(translationResponse());
  }

  async getTranslationList(): Promise<Translation[]> {
    return respondMockResult(translationsResponse());
  }

  async signup(params: SignupRequest): Promise<AccessTokens> {
    return respondMockResult(fakeTokens());
  }

  async signin(params: SigninRequest): Promise<AccessTokens> {
    return respondMockResult(fakeTokens());
  }

  async logout(): Promise<void> {
    void respondMockResult(null);
  }

  async refresh(params: RefreshTokenRequest): Promise<AccessTokens> {
    return respondMockResult(fakeTokens());
  }

  async getSelfInfo(): Promise<SelfInfoResponse> {
    return respondMockResult(fakeSelfInfo());
  }

  async setUserInfo(params: SetUserInfoRequest): Promise<SelfInfoResponse> {
    return respondMockResult(fakeSelfInfo());
  }

  async setUserPassword(params: SetUserPasswordRequest): Promise<SelfInfoResponse> {
    return respondMockResult(fakeSelfInfo());
  }

  async setPoll(params: SetPollRequest): Promise<PollResponse> {
    return respondMockResult(fakePoll());
  }

  async getPolls(scope?: string): Promise<PollResponse[]> {
    return respondMockResult(fakePolls());
  }

  async getMyPolls(scope?: string): Promise<PollResponse[]> {
    return respondMockResult(fakePolls());
  }

  async getPoll(id: string): Promise<PollResponse> {
    return respondMockResult(fakePoll());
  }

  async getPollMembers(id: string): Promise<PollMembersResponse[]> {
    return respondMockResult(fakePollMembers());
  }

  async sendPollInvite(params: SendPollInviteRequest): Promise<void> {
    void respondMockResult(null);
  }

  async removePoll(id: string): Promise<void> {
    void respondMockResult(null);
  }

  async updatePoll(id: string, params: SetPollRequest): Promise<void> {
    void respondMockResult(null);
  }

  async getPollAnswers(id: string): Promise<PollQuestionAnswer[]> {
    return respondMockResult(fakePollAnswers());
  }

  async joinPoll(params: JoinPollRequest): Promise<void> {
    void respondMockResult(null);
  }

  async getUserProgress(): Promise<UserProgressResponse> {
    return respondMockResult(fakeUserProgressResponse());
  }

  async getUserPopularPolls(): Promise<PollResponse[]> {
    return respondMockResult(fakePolls());
  }

  async getUnsplashPhotos(params: UnsplashPhotoRequest): Promise<UnsplashPhotoResponse[]> {
    return respondMockResult(fakeUnsplashPhotos());
  }

  async searchUnsplashPhotos(params: UnsplashPhotoRequest): Promise<UnsplashPhotoResponse[]> {
    return respondMockResult(fakeUnsplashPhotos());
  }

  async getReactions(): Promise<ReactionResponse[]> {
    return respondMockResult(fakeReactions());
  }
};
