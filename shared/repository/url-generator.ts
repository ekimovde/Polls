import { ProjectUrlGenerator } from '~/shared/repository/repo';

export enum ApiRoutes {
  translation = 'translation/',
  translations = 'translations/',
  auth = 'auth/',
  user = 'user/',
  users = 'users/',
  poll = 'poll/',
  polls = 'polls/',
  reactions = 'reactions/',
  unsplash = 'https://api.unsplash.com/'
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
    return `${ApiRoutes.polls}all/`;
  }

  getMyPolls(): string {
    return `${ApiRoutes.polls}my/`;
  }

  getPollMembers(id: string): string {
    return `${ApiRoutes.polls}members/${id}`;
  }

  getPoll(id: string): string {
    return `${ApiRoutes.polls}${id}`;
  }

  sendPollInvite(): string {
    return `${ApiRoutes.polls}invite/`;
  }

  joinPoll(): string {
    return `${ApiRoutes.polls}join/`;
  }

  getPopularPolls(): string {
    return ApiRoutes.polls;
  }

  removePoll(id: string): string {
    return `${ApiRoutes.polls}${id}`;
  }

  endPoll(id: string): string {
    return `${ApiRoutes.polls}end/${id}`;
  }

  updatePoll(id: string): string {
    return `${ApiRoutes.polls}${id}`;
  }

  getPollVoteResults(id: string): string {
    return `${ApiRoutes.polls}vote/results/${id}/`;
  }

  setVoteInPoll(): string {
    return `${ApiRoutes.polls}set-vote/`;
  }

  getUserProgress(): string {
    return `${ApiRoutes.users}progress/`;
  }

  getUnsplashPhotos(): string {
    return `${ApiRoutes.unsplash}photos/`;
  }

  searchUnsplashPhotos(): string {
    return `${ApiRoutes.unsplash}search/photos/`;
  }

  getReactions(): string {
    return ApiRoutes.reactions;
  }
}
