import { getTestSelectors } from '~/shared/utils/unit-test/test-id';

export const COMPONENT_NAME = 'home-discussions';

export enum HomeDiscussionsTextAttribute {
  category = 'Discussions',
  title = 'Clear discussions on the stand-up',
  description = 'All stand-ups have comments. Drop a comment on a stand-up to say well done for completing a difficult task, ask questions or @mention other team members to start a conversation.'
}

export enum HomeDiscussionsTestLocator {
  //
}

export const dtHomeDiscussions = getTestSelectors(COMPONENT_NAME, HomeDiscussionsTestLocator);
