import { respondMockResult } from '../utils/respond-mock-result';
import { consoleLogMethodCalls } from '../utils/unit-test/console-log-method-calls';
import { AccessTokens, AuthorizationRequest, ProjectRepository, UpdateAccessTokenRequest, TranslationRequest, UserProgressResponse, PollResponse } from './repo';
import { translationResponse } from './fixtures/translation';
import { translationsResponse } from './fixtures/translations';
import { Translation } from '../services/translator';
import { fakeUserProgress } from './fixtures/fake-user-progress';
import { fakePolls } from './fixtures/fake-polls';

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

  async auth(params: AuthorizationRequest): Promise<AccessTokens> {
    return null;
  }

  async updateAccessToken(params: UpdateAccessTokenRequest): Promise<AccessTokens> {
    return null;
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
};
