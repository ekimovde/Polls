import { getTestSelectors } from '~/shared/utils/unit-test/test-id';

export const COMPONENT_NAME = 'poll-vote-info';

export enum PollVoteInfoTextAttribute {
  totalVotes = 'Количество голосов:'
}

export enum PollVoteInfoTestLocator {
  //
}

export const dtPollVoteInfo = getTestSelectors(COMPONENT_NAME, PollVoteInfoTestLocator);
