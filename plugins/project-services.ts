import { Plugin } from '@nuxt/types';
import createProjectServices from '~/shared/repository/services-factory';
import { initializeProjectServices } from '~/shared/repository/initialize-project-services';

const projectServicesPlugin: Plugin = (context, inject) => {
  const projectServicesInstance = createProjectServices(context);

  initializeProjectServices(projectServicesInstance);

  inject('projectServices', projectServicesInstance);
};

export default projectServicesPlugin;
