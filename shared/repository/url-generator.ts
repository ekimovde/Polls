import { ProjectUrlGenerator } from '~/shared/repository/repo';

export enum ApiRoutes {
  translation = 'translation/',
  translations = 'translations/',
  auth = 'auth/',
  updateAccessToken = 'update-access-token/',
  user = 'user/'
}

export class UrlGenerator implements ProjectUrlGenerator {
  getTranslation(): string {
    return ApiRoutes.translation;
  }

  getTranslationList(): string {
    return ApiRoutes.translations;
  }

  auth(): string {
    return ApiRoutes.auth;
  }

  updateAccessToken(): string {
    return ApiRoutes.updateAccessToken;
  }

  getUserProgress(): string {
    return `${ApiRoutes.user}/progress/`;
  }
}
