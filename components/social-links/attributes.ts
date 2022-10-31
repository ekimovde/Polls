import { getTestSelectors } from '~/shared/utils/unit-test/test-id';

export const COMPONENT_NAME = 'social-links';

export enum SocialLinksTextAttribute {
  //
}

export enum SocialLinksTestLocator {
  //
}

export const dtSocialLinks = getTestSelectors(COMPONENT_NAME, SocialLinksTestLocator);
