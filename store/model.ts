import UserModuleState from '~/store/modules/user';

export interface ProjectStore {
  user: UserModuleState
}

export interface StoreGetters {
  getters: ProjectStore
}

export interface Language {
  id: number,
  code: string,
  title: string,
  default?: number
}
