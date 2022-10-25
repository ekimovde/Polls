import { getTestSelectors } from '~/shared/utils/unit-test/test-id';

export const COMPONENT_NAME = 'home-insights';

export enum HomeInsightsTextAttribute {
  category = 'Dashboard insights',
  title = 'Gain insights of any blockers & team progress',
  description = 'With our dashboard and team views you will have complete visibility over your teams and an individual team member`s performance at a glance.'
}

export enum HomeInsightsTestLocator {
  //
}

export const dtHomeInsights = getTestSelectors(COMPONENT_NAME, HomeInsightsTestLocator);
