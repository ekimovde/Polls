import { Route } from 'vue-router';
import { RoutesName } from './routes/routes-name';
import { SharedColorTheme } from '~/components/shared/color/component';

export type Routes = Record<RoutesName, Partial<Route>>

export const DEFAULT_CURRENCY = 'RUB';

export const DEFAULT_COUNTRY_ID = 1;
export const DEFAULT_COUNTRY_CODE = 'RU';
export const DEFAULT_COUNTRY_TITLE = 'Русский';

enum GetPollsParamsScope {
  date = 'date',
  time = 'time',
  question = 'question',
}

const scopeForPolls = `
  ${GetPollsParamsScope.date},
  ${GetPollsParamsScope.time},
  ${GetPollsParamsScope.question}
`;

export const getPollsScope = scopeForPolls.replace(/\s/g, '');

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
  value: string | number | SharedColorTheme
}

export interface DropdownItemBase {
  title: string
  routeName: RoutesName
  type: DropdownItemTypeBase
}

export enum DropdownItemTypeBase {
  default = 'default',
  regular = 'regular',
  extra = 'extra'
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

export const DEFAULT_COUNT_OF_USER_PROGRESS = 0;
export const DEFAULT_TOTAL_OF_USER_PROGRESS = 100;
