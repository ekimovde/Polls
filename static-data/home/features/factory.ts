import { HomeFeature, HomeBlockTheme } from '~/components/home/model';

export const homeFeature = (params: Partial<HomeFeature> = {}): HomeFeature => {
  return {
    icon: 'bx bx-time',
    title: 'Async daily stand-ups',
    description: 'Have your team attend daily stand-ups online and have complete visibility over your teams progress and blockers',
    theme: HomeBlockTheme.pink,
    ...params
  };
};

export const fakeFeatures = (): HomeFeature[] => {
  return [
    homeFeature(),
    homeFeature({
      icon: 'bx bxs-chat',
      title: 'Discussions',
      description: 'Every stand-up has comments enabled. Check in, acknowledge progress or discuss blockers, all on the stand-up',
      theme: HomeBlockTheme.orange
    }),
    homeFeature({
      icon: 'bx bx-compass',
      title: 'Dashboard insights',
      description: 'See at a glance how your team is feeling, if team members are blocked, and who hit the previous day`s goals',
      theme: HomeBlockTheme.purple
    }),
    homeFeature({
      icon: 'bx bx-check',
      title: 'Task Management',
      description: 'Inside Stand to allow daily stand-ups and tasks to live in one place.',
      theme: HomeBlockTheme.blue
    }),
    homeFeature({
      icon: 'bx bx-world',
      title: 'Remote team friendly',
      description: 'Truly asynchronous stand-ups. With remote teams, not everyone`s day starts at the same time and we allow for that',
      theme: HomeBlockTheme.green
    }),
    homeFeature({
      icon: 'bx bx-smile',
      title: 'Team mood',
      description: 'At a glance see how the team are feeling, understand if a team member is unhappy or under pressure so that you can act',
      theme: HomeBlockTheme.teal
    })
  ];
};
