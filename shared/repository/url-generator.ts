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

  setPoll(): string {
    return ApiRoutes.polls;
  }

  getPolls(): string {
    return ApiRoutes.polls;
  }

  getMyPolls(): string {
    return `${ApiRoutes.polls}my/`;
  }

  getPoll(id: string): string {
    return `${ApiRoutes.polls}${id}`;
  }

  sendPollInvite(): string {
    return `${ApiRoutes.polls}invite/`;
  }

  removePoll(id: string): string {
    return `${ApiRoutes.polls}${id}`;
  }

  updatePoll(id: string): string {
    return `${ApiRoutes.polls}${id}`;
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

  getReactions(): string {
    return ApiRoutes.reactions;
  }
}
