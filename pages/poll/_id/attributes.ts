export const COMPONENT_NAME = 'poll-id-page';

export enum PollIdPagePageTextAttribute {
  description = 'В этоме опросе участвует: ',
  settings = 'Настройки',
  modalTitle = 'Ты уверен?',
  modalDescription = `
    Если вы удалите этот опрос, все голосования прекратятся, а пользователи будут удалены
    от этого опроса это действие не может быть отменено.
  `,
  deletePoll = 'Удалить опрос',
  modalVoteDescription = 'Если вы завершите голосование, то вы не сможете возобновить в этом опросе его ещё раз.',
  endVote = 'Завершить опрос'
}
