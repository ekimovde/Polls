import { getTestSelectors } from '~/shared/utils/unit-test/test-id';

export const COMPONENT_NAME = 'settings-invite';

export enum SettingsInviteTextAttribute {
  title = 'Invite via email',
  noteLabel = 'Add a note to the inivte',
  notePlaceholder = 'Add a message to your invites',
  emailLabel = 'Email Address',
  emailPlaceholder = 'email@example.com',
  emailErrorMessage = 'Please enter an email address',
  sendInvites = 'Send Invites'
}

export enum SettingsInviteTestLocator {
  //
}

export const dtSettingsInvite = getTestSelectors(COMPONENT_NAME, SettingsInviteTestLocator);
