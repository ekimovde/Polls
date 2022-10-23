import { ShareListParams, ShareListType } from '~/components/share-list/model';

export const shareItem = (params: Partial<ShareListParams> = {}): ShareListParams => {
  return {
    title: 'Share a join link',
    description: 'This will allow anyone with the link to join your team.',
    type: ShareListType.joinLink,
    ...params
  };
};

export const shareList = (): ShareListParams[] => {
  return [
    shareItem(),
    shareItem({
      title: 'Invite via email',
      description: 'Add the email address of team members you want to join your team.',
      type: ShareListType.inviteEmail
    })
  ];
};
