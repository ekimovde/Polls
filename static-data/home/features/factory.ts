import { HomeFeature, HomeBlockTheme } from '~/components/home/model';

export const homeFeature = (params: Partial<HomeFeature> = {}): HomeFeature => {
  return {
    icon: 'bx bx-time',
    title: 'Асинхронные ежедневные опросы',
    description: 'Пусть ваша команда посещает ежедневные опросы онлайн и имеет полную видимость прогресса вашей команды и блокировок',
    theme: HomeBlockTheme.pink,
    ...params
  };
};

export const fakeFeatures = (): HomeFeature[] => {
  return [
    homeFeature(),
    homeFeature({
      icon: 'bx bxs-chat',
      title: 'Обсуждения',
      description: 'В каждом опросе включены комментарии. Регистрируйтесь, подтверждайте прогресс или обсуждайте блокировщики, и все это в режиме ожидания',
      theme: HomeBlockTheme.orange
    }),
    homeFeature({
      icon: 'bx bx-compass',
      title: 'Аналитическая информация на панели мониторинга',
      description: 'Посмотрите с первого взгляда, как чувствует себя ваша команда, заблокированы ли члены команды и кто достиг целей предыдущего дня',
      theme: HomeBlockTheme.purple
    }),
    homeFeature({
      icon: 'bx bx-check',
      title: 'Управление задачами',
      description: 'Внутренняя подставка, позволяющая выполнять ежедневные задания в одном месте.',
      theme: HomeBlockTheme.blue
    }),
    homeFeature({
      icon: 'bx bx-world',
      title: 'Удаленная дружелюбная команда',
      description: 'Поистине асинхронные опросы. В удаленных командах не у всех день начинается в одно и то же время, и мы допускаем это',
      theme: HomeBlockTheme.green
    }),
    homeFeature({
      icon: 'bx bx-smile',
      title: 'Командный настрой',
      description: 'С первого взгляда посмотрите, как чувствует себя команда, поймите, недоволен ли кто-то из членов команды или находится под давлением, чтобы вы могли действовать',
      theme: HomeBlockTheme.teal
    })
  ];
};
