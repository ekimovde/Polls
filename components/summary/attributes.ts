import { getTestSelectors } from '~/shared/utils/unit-test/test-id';

export const COMPONENT_NAME = 'summary-block';

export enum SummaryBlockTextAttribute {
  //
}

export enum SummaryBlockTestLocator {
  //
}

export const dtSummaryBlock = getTestSelectors(COMPONENT_NAME, SummaryBlockTestLocator);
