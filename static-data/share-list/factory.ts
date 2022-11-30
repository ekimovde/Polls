import { ShareListParams, ShareListType } from '~/components/share-list/model';

export const shareItem = (params: Partial<ShareListParams> = {}): ShareListParams => {
  return {
    title: 'Поделитесь ссылкой для присоединения',
    description: 'Это позволит любому, у кого есть ссылка, присоединиться к вашему опросу.',
    type: ShareListType.joinLink,
    ...params
  };
};

export const shareList = (): ShareListParams[] => {
  return [
    shareItem(),
    shareItem({
      title: 'Пригласить по электронной почте',
      description: 'Добавьте адрес электронной почты члена опроса, к которому вы хотите присоединиться.',
      type: ShareListType.inviteEmail
    })
  ];
};
