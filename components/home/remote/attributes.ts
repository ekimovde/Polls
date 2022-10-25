import { getTestSelectors } from '~/shared/utils/unit-test/test-id';

export const COMPONENT_NAME = 'home-remote';

export enum HomeRemoteTextAttribute {
  category = 'Remote team friendly',
  title = 'Have visibility over remote teams with ease',
  description = 'We believe remote teams are the future. We are allowing for that as standard with asynchronous daily stand-ups for your team members, with complete visibility for team admins/leaders.'
}

export enum HomeRemoteTestLocator {
  //
}

export const dtHomeRemote = getTestSelectors(COMPONENT_NAME, HomeRemoteTestLocator);
