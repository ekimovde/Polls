import UserModuleState from '~/store/modules/user';
import LoaderModuleStore from '~/store/modules/loader';
import NotificationModuleState from '~/store/modules/notification';
import { Translation, TranslatorType } from '../services/translator';
import { TranslationsUpdater } from '../services/translations-updater';
import { NotificationMethods } from '~/components/shared/notification/component';
import { PollCategory } from './constants';
import { SharedColorTheme } from '~/components/shared/color/component';
import { UiProgressTheme } from '~/components/ui/progress/component';
import HeaderModuleStore from '~/store/modules/header';
import FooterModuleStore from '~/store/modules/footer';
import { PollQuestionAnswer, PollQuestionTime, PollQuestionDate, PollQuestionResponse, PollAuthor } from '~/components/poll/model';

export interface ProjectRepository {
  getTranslation(params: TranslationRequest): Promise<string>
  getTranslationList(): Promise<Translation[]>
  signup(params: SignupRequest): Promise<AccessTokens>
  signin(params: SigninRequest): Promise<AccessTokens>
  logout(): Promise<void>
  refresh(params: RefreshTokenRequest): Promise<AccessTokens>
  getSelfInfo(): Promise<SelfInfoResponse>
  setUserInfo(params: SetUserInfoRequest): Promise<SelfInfoResponse>
  setUserPassword(params: SetUserPasswordRequest): Promise<SelfInfoResponse>
  setPoll(params: SetPollRequest): Promise<PollResponse>
  getPolls(): Promise<PollResponse[]>
  getMyPolls(): Promise<PollResponse[]>
  getPollMembers(id: string): Promise<PollMembersResponse[]>
  getPoll(id: string): Promise<PollResponse>
  sendPollInvite(params: SendPollInviteRequest): Promise<void>
  removePoll(id: string): Promise<void>
  updatePoll(id: string, params: SetPollRequest): Promise<void>
  getPollAnswers(id: string): Promise<PollQuestionAnswer[]>
  getUnsplashPhotos(params: UnsplashPhotoRequest): Promise<UnsplashPhotoResponse[]>
  searchUnsplashPhotos(params: UnsplashPhotoRequest): Promise<UnsplashPhotoResponse[]>
  getUserProgress(): Promise<UserProgressResponse[]>
  getUserPopularPolls(): Promise<PollResponse[]>
  getReactions(): Promise<ReactionResponse[]>
}

export interface ProjectUrlGenerator {
  getTranslation(): string
  getTranslationList(): string
  signup(): string
  signin(): string
  logout(): string
  refresh(): string
  getSelfInfo(): string
  setUserInfo(): string
  setUserPassword(): string
  getPolls(): string
  getMyPolls(): string
  getPollMembers(id: string): string
  getPoll(id: string): string
  removePoll(id: string): string
  updatePoll(id: string): string
  getUnsplashPhotos(): string
}

export interface ProjectServices {
  projectRepository: ProjectRepository
  projectUrlGenerator: ProjectUrlGenerator
  translator: TranslatorType
  translationsUpdater: TranslationsUpdater
  userRepo?: UserModuleState
  loaderRepo?: LoaderModuleStore
  notificationRepo?: NotificationModuleState
  notification: NotificationMethods
  headerRepo?: HeaderModuleStore
  footerRepo?: FooterModuleStore
}

export interface ApiWrapper<T> {
  status?: string
  description?: string
  response: T
}

export interface SignupRequest {
  firstName: string
  lastName: string
  nickName: string
  email: string
  password: string
}

export interface SigninRequest {
  email: string
  password: string
}

export interface RefreshTokenRequest {
  refresh_token: string
}

export interface AccessTokens {
  access_token: string
  refresh_token: string
  accessToken: string
  refreshToken: string
}

export interface TranslationRequest {
  text: string
  case?: string
}

export interface SelfInfoResponse {
  id: number
  avatar: string
  firstName: string
  lastName: string
  fullName: string
  nickName: string
  email: string
}

export interface SetUserInfoRequest {
  avatar?: string
  firstName?: string
  lastName?: string
  nickName?: string
}

export interface SetUserPasswordRequest {
  password: string
  newPassword: string
}

export interface SetPollRequest {
  name: string
  color: SharedColorTheme
  category: PollCategory
  question: PollQuestionResponse
  date?: PollQuestionDate
  time?: PollQuestionTime
  isPublic: boolean
}

export interface PollResponse {
  id: number
  name: string
  color: SharedColorTheme
  category: PollCategory
  question: PollQuestionResponse
  date: PollQuestionDate
  time: PollQuestionTime
  author: PollAuthor
  userId: number
  isPublic: boolean
  created: string
  updated: string
}

export interface PollMembersResponse {
  id: number
  fullName: string
  avatar: string
}

export interface SendPollInviteRequest {
  pollId: number
  description: string
  emailTo: string
}

export interface UnsplashPhotoRequest {
  page: number
  search?: string
}

export interface UnsplashPhotoResponse {
  id: string
  width: number
  height: number
  urls: {
    small: string
    regular: string
    full: string
    raw: string
    thumb: string
  };
  color: string
  user: {
    id: string
    username: string
    name: string
    portfolio_url: string
  }
  links: {
    self: string
    html: string
    download: string
    download_location: string
  }
};

export interface UserProgressResponse {
  title: string
  value: number
  description: string
  theme: UiProgressTheme
}

export interface ReactionResponse {
  id: number
  icon: string
  quantity: number
}
