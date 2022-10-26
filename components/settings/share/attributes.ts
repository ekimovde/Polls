import { getTestSelectors } from '~/shared/utils/unit-test/test-id';

export const COMPONENT_NAME = 'settings-share';

export enum SettingsShareTextAttribute {
  title = 'Share a join link',
  descriptionOne = 'This will allow anyone with the link to join your team, we will email the team admin and company owner when a team member joins.',
  descriptionTwo = 'You can promote team members to a team admin at anytime once they join.',
  placeholder = 'Join link',
  new = 'New'
}

export enum SettingsShareTestLocator {
  //
}

export const dtSettingsShare = getTestSelectors(COMPONENT_NAME, SettingsShareTestLocator);
