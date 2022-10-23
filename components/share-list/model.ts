export enum ShareListType {
  joinLink = 'join-link',
  inviteEmail = 'invite-email'
}

export interface ShareListParams {
  title: string
  description: string
  type: ShareListType
}
