import { getTestSelectors } from '~/shared/utils/unit-test/test-id';

export const COMPONENT_NAME = 'poll-vote-result';

export enum PollVoteResultTextAttribute {
  yourAnswer = 'Ваш ответ'
}

export enum PollVoteResultTestLocator {
  //
}

export const dtPollVoteResult = getTestSelectors(COMPONENT_NAME, PollVoteResultTestLocator);
