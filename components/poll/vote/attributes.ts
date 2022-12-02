import { getTestSelectors } from '~/shared/utils/unit-test/test-id';

export const COMPONENT_NAME = 'poll-vote';

export enum PollVoteTextAttribute {
  billuten = 'Биллютень',
  vote = 'Голосовать',
  selectAnswer = 'Выберите вариант ответа 🖼️'
}

export enum PollVoteTestLocator {
  //
}

export const dtPollVote = getTestSelectors(COMPONENT_NAME, PollVoteTestLocator);
