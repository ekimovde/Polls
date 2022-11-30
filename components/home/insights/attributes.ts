import { getTestSelectors } from '~/shared/utils/unit-test/test-id';

export const COMPONENT_NAME = 'home-insights';

export enum HomeInsightsTextAttribute {
  category = 'Аналитическая информация на панели мониторинга',
  title = 'Получите представление о любых блокировках и прогрессе команды',
  description = 'С помощью нашей панели мониторинга и представлений команд вы будете иметь полную информацию о своих командах и результатах работы каждого отдельного члена команды с первого взгляда.'
}

export enum HomeInsightsTestLocator {
  //
}

export const dtHomeInsights = getTestSelectors(COMPONENT_NAME, HomeInsightsTestLocator);
