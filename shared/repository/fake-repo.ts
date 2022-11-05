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
  SetUserPasswordRequest
} from './repo';
import { translationResponse } from './fixtures/translation';
import { translationsResponse } from './fixtures/translations';
import { Translation } from '../services/translator';
import { fakeUserProgress } from './fixtures/fake-user-progress';
import { fakePolls } from './fixtures/fake-polls';
import { fakeReactions } from './fixtures/fake-reactions';
import { fakePollMembers } from './fixtures/fake-poll-members';
import { fakeSelfInfo } from './fixtures/fake-self-info';

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
    return null;
  }

  async signin(params: SigninRequest): Promise<AccessTokens> {
    return null;
  }

  async logout(): Promise<void> {
    void respondMockResult(null);
  }

  async refresh(params: RefreshTokenRequest): Promise<AccessTokens> {
    return null;
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

  async getUserProgress(): Promise<UserProgressResponse[]> {
    return respondMockResult(fakeUserProgress());
  }

  async getUserPopularPolls(): Promise<PollResponse[]> {
    return respondMockResult(fakePolls());
  }

  async getPolls(): Promise<PollResponse[]> {
    return respondMockResult(fakePolls());
  }

  async getMyPolls(): Promise<PollResponse[]> {
    return respondMockResult(fakePolls());
  }

  async getReactions(): Promise<ReactionResponse[]> {
    return respondMockResult(fakeReactions());
  }

  async getPollMembers(id: string): Promise<PollMembersResponse[]> {
    return respondMockResult(fakePollMembers());
  }
};
