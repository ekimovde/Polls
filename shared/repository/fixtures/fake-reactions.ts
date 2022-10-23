import { ReactionResponse } from '../repo';

export const fakeReaction = (params: Partial<ReactionResponse> = {}): ReactionResponse => {
  return {
    id: 1,
    icon: '✅',
    quantity: 12,
    ...params
  };
};

export const fakeReactions = (): ReactionResponse[] => {
  return [
    fakeReaction(),
    fakeReaction({
      id: 2,
      icon: '❤️',
      quantity: 222
    }),
    fakeReaction({
      id: 3,
      icon: '🦊',
      quantity: 10
    }),
    fakeReaction({
      id: 4,
      icon: '🐺',
      quantity: 1
    }),
    fakeReaction({
      id: 5,
      icon: '😵‍💫',
      quantity: 51
    })
  ];
};
