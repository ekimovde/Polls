import { ProjectUrlGenerator } from '~/shared/repository/repo';

export enum ApiRoutes {
  translation = 'translation/',
  translations = 'translations/',
  auth = 'auth/',
  user = 'user/',
  users = 'users/',
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

  signup(): string {
    return `${ApiRoutes.auth}signup/`;
  }

  signin(): string {
    return `${ApiRoutes.auth}signin/`;
  }

  logout(): string {
    return `${ApiRoutes.auth}logout/`;
  }

  refresh(): string {
    return `${ApiRoutes.auth}refresh/`;
  }

  getSelfInfo(): string {
    return `${ApiRoutes.users}info/`;
  }

  setUserInfo(): string {
    return `${ApiRoutes.users}set-user-info/`;
  }

  setUserPassword(): string {
    return `${ApiRoutes.users}set-user-password/`;
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
