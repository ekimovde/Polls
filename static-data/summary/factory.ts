import { SummaryBase } from '~/components/summary/model';

export const summaryItem = (params: Partial<SummaryBase> = {}): SummaryBase => {
  return {
    icon: 'bx bx-street-view bx-tada',
    description: 'All your team members will be receiving invites via email now, they will show as pending until they create an account or use the share link to join.',
    ...params
  };
};

export const summaryList = (): SummaryBase[] => {
  return [
    summaryItem(),
    summaryItem({
      icon: 'bx bx-male bx-tada',
      description: 'Team memebers will be asked what time they want to attend daily standups, this is to allow for fully asynchronous daily stand-ups even for remote distrubuted teams.'
    }),
    summaryItem({
      icon: 'bx bxl-mailchimp bx-tada',
      description: 'We’ll email you whenever a team member completes a standup however you can change this via the team settings.'
    }),
    summaryItem({
      icon: 'bx bx-bolt-circle bx-tada',
      description: 'Team members will now be prompted daily to attend standups. Sit back and wait for them to roll in.'
    })
  ];
};
