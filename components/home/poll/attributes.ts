import { getTestSelectors } from '~/shared/utils/unit-test/test-id';

export const COMPONENT_NAME = 'home-poll';

export enum HomePollTextAttribute {
  category = 'Team mood',
  title = 'Understand how your team feels every day',
  description = 'Your team`s health is a big deal. A happy team is a productive team! Keep a close eye on your team`s mood and act when needed. Adding your mood when attending a stand-up is optional for team members.'
}

export enum HomePollTestLocator {
  //
}

export const dtHomePoll = getTestSelectors(COMPONENT_NAME, HomePollTestLocator);
