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

export interface ProjectRepository {
  getTranslation(params: TranslationRequest): Promise<string>
  getTranslationList(): Promise<Translation[]>
  auth(params?: AuthorizationRequest): Promise<AccessTokens>
  updateAccessToken(params?: UpdateAccessTokenRequest): Promise<AccessTokens>
  getUserProgress(): Promise<UserProgressResponse[]>
  getUserPopularPolls(): Promise<PollResponse[]>
  getPolls(): Promise<PollResponse[]>
  getMyPolls(): Promise<PollResponse[]>
  getReactions(): Promise<ReactionResponse[]>
}

export interface ProjectUrlGenerator {
  getTranslation(): string
  getTranslationList(): string
  auth(): string
  updateAccessToken(): string
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

export interface AuthorizationRequest {
  login: string
  password: string
}

export interface UpdateAccessTokenRequest {
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

export interface UserProgressResponse {
  title: string
  value: number
  description: string
  theme: UiProgressTheme
}

export interface PollResponse {
  id: number
  name: string
  color: SharedColorTheme
  category: PollCategory
  isPublic: boolean
  created: string
  updated: string
}

export interface ReactionResponse {
  id: number
  icon: string
  quantity: number
}
