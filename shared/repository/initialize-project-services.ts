import { ProjectServices } from '~/shared/repository/repo';

// eslint-disable-next-line import/no-mutable-exports
let $projectServices: ProjectServices;

export function initializeProjectServices(projectServicesInstance: ProjectServices): void {
  $projectServices = projectServicesInstance;
}

export { $projectServices };
