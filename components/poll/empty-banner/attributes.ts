import { getTestSelectors } from '~/shared/utils/unit-test/test-id';

export const COMPONENT_NAME = 'poll-empty-banner';

export enum PollEmptyBannerTextAttribute {
  title = 'Let’s create your first poll',
  description = 'A team, for example “Design Team” will have team members you’ll invite and they will be prompted to attend asynchronous daily stand-ups.',
  createPoll = 'Create Poll'
}

export enum PollEmptyBannerTestLocator {
  //
}

export const dtPollEmptyBanner = getTestSelectors(COMPONENT_NAME, PollEmptyBannerTestLocator);
