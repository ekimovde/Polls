import { getTestSelectors } from '~/shared/utils/unit-test/test-id';

export const COMPONENT_NAME = 'poll-vote-option';

export enum PollVoteOptionTextAttribute {
  //
}

export enum PollVoteOptionTestLocator {
  //
}

export const dtPollVoteOption = getTestSelectors(COMPONENT_NAME, PollVoteOptionTestLocator);
