import { getTestSelectors } from '~/shared/utils/unit-test/test-id';

export const COMPONENT_NAME = 'avatar-block';

export enum AvatarBlockTextAttribute {
  //
}

export enum AvatarBlockTestLocator {
  //
}

export const dtAvatarBlock = getTestSelectors(COMPONENT_NAME, AvatarBlockTestLocator);
