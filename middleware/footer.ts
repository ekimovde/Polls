import { Middleware } from '@nuxt/types';
import { RoutesName } from '~/shared/repository/routes/routes-name';

const footer: Middleware = async (context) => {
  const { route, $projectServices } = context;
  const { footerRepo } = $projectServices;

  const routesToHideFooter = [
    RoutesName.authLogin,
    RoutesName.authRegistration
  ];

  const isFooterHidden = routesToHideFooter.some(item => item === route.name);

  if (isFooterHidden) {
    void footerRepo.setVisible(false);
    return;
  }

  void footerRepo.setVisible(true);
};

export default footer;
