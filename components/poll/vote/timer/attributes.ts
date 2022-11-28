import { getTestSelectors } from '~/shared/utils/unit-test/test-id';

export const COMPONENT_NAME = 'poll-vote-timer';

export enum PollVoteTimerTextAttribute {
  title = 'When should this poll close?',
  days = 'Days',
  hours = 'Hours',
  mins = 'Mins',
  description = 'Poll will close on January 30 at 8:30pm.'
}

export enum PollVoteTimerTestLocator {
  //
}

export const dtPollVoteTimer = getTestSelectors(COMPONENT_NAME, PollVoteTimerTestLocator);
