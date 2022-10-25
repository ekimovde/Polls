import { getTestSelectors } from '~/shared/utils/unit-test/test-id';

export const COMPONENT_NAME = 'home-task-management';

export enum HomeTaskManagementTextAttribute {
  category = 'Task Management',
  title = 'Complete task management for your team',
  description = 'We give your team the option to attend a stand-up inside stand and also manage all of thier tasks. Our tasks come with tagging, due dates, comments and the ability to assign tasks between team members.'
}

export enum HomeTaskManagementTestLocator {
  //
}

export const dtHomeTaskManagement = getTestSelectors(COMPONENT_NAME, HomeTaskManagementTestLocator);
