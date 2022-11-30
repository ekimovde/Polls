import { getTestSelectors } from '~/shared/utils/unit-test/test-id';

export const COMPONENT_NAME = 'home-task-management';

export enum HomeTaskManagementTextAttribute {
  category = 'Управление задачами',
  title = 'Полное управление задачами для вашей команды',
  description = 'Мы предоставляем вашей команде возможность посетить голосование внутри опроса, а также управлять всеми их задачами. Наши задачи сопровождаются пометками, сроками выполнения, комментариями и возможностью распределять задачи между членами команды.'
}

export enum HomeTaskManagementTestLocator {
  //
}

export const dtHomeTaskManagement = getTestSelectors(COMPONENT_NAME, HomeTaskManagementTestLocator);
