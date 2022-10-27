import { ProjectUrlGenerator } from '~/shared/repository/repo';

export enum ApiRoutes {
  translation = 'translation/',
  translations = 'translations/',
  auth = 'auth/',
  updateAccessToken = 'update-access-token/',
  user = 'user/',
  poll = 'poll/',
  polls = 'polls/',
  reactions = 'reactions/'
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

  getUserPopularPolls(): string {
    return `${ApiRoutes.user}/popular-polls`;
  }

  getPollMembers(id: string): string {
    return `${ApiRoutes.poll}/${id}/members`;
  }

  getPolls(): string {
    return ApiRoutes.polls;
  }

  getMyPolls(): string {
    return `${ApiRoutes.polls}/my/`;
  }

  getReactions(): string {
    return ApiRoutes.reactions;
  }
}
