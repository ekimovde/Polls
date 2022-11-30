import { SummaryBase } from '~/components/summary/model';

export const summaryItem = (params: Partial<SummaryBase> = {}): SummaryBase => {
  return {
    icon: 'bx bx-street-view bx-tada',
    description: 'Все члены вашего опроса теперь будут получать приглашения по электронной почте, они будут отображаться как ожидающие, пока они не создадут учетную запись или не воспользуются ссылкой "Поделиться", чтобы присоединиться.',
    ...params
  };
};

export const summaryList = (): SummaryBase[] => {
  return [
    summaryItem(),
    summaryItem({
      icon: 'bx bx-male bx-tada',
      description: 'Членов опроса спросят, в какое время они хотят посещать ежедневные опросы, это позволит проводить полностью асинхронные ежедневные опросы даже для удаленных распределенных опросов.'
    }),
    summaryItem({
      icon: 'bx bxl-mailchimp bx-tada',
      description: 'Мы отправим вам электронное письмо всякий раз, когда член опроса завершит опрос, однако вы можете изменить это через настройки опроса.'
    }),
    summaryItem({
      icon: 'bx bx-bolt-circle bx-tada',
      description: 'Членам опроса теперь будет ежедневно предлагаться посещать опросы. Сядьте поудобнее и ждите, когда они появятся.'
    })
  ];
};
