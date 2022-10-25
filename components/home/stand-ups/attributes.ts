import { getTestSelectors } from '~/shared/utils/unit-test/test-id';

export const COMPONENT_NAME = 'home-stand-ups';

export enum HomeStandUpsTextAttribute {
  category = 'Daily stand-ups',
  title = 'A clear view of who’s working on what',
  description = 'You will be informed of current progress, intentions, blockers and questions all without joining a call. Team admins will be notified when a team member has attended a stand-up.'
}

export enum HomeStandUpsTestLocator {
  //
}

export const dtHomeStandUps = getTestSelectors(COMPONENT_NAME, HomeStandUpsTestLocator);
