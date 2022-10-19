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
