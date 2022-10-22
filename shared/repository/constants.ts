import { Route } from 'vue-router';
import { RoutesName } from './routes/routes-name';

export type Routes = Record<RoutesName, Partial<Route>>

export const DEFAULT_CURRENCY = 'RUB';

export const DEFAULT_COUNTRY_ID = 1;
export const DEFAULT_COUNTRY_CODE = 'RU';
export const DEFAULT_COUNTRY_TITLE = 'Русский';

export interface RouteItemBase {
  title: string
  routeName: RoutesName
}

export interface LinkItemBase {
  href: string
  target: string
  src?: string
}

export interface SelectOptionBase {
  label: string,
  value: string | number
}

export interface DropdownItemBase {
  title: string
  routeName: RoutesName
  type: DropdownItemTypeBase
}

export enum DropdownItemTypeBase {
  default = 'default',
  logout = 'logout'
}

export enum PollCategory {
  animals = 'Animals',
  art = 'Art',
  books = 'Books',
  colour = 'Colour',
  crypto = 'Crypto',
  days = 'Days',
  drink = 'Drink',
  food = 'Food',
  gaming = 'Gaming',
  healthcare = 'Healthcare',
  history = 'History',
  investment = 'Investment',
  mobileDevelopment = 'Mobile Development',
  movies = 'Movies',
  music = 'Music',
  news = 'News',
  politics = 'Politics',
  random = 'Random',
  science = 'Science',
  social = 'Social',
  startup = 'Startup',
  tv = 'Tv',
  webDesign = 'Web Design',
  webDevelopment = 'Web Development',
  week = 'Week',
}
