import { Middleware } from '@nuxt/types';
import { RoutesName } from '~/shared/repository/routes/routes-name';

const header: Middleware = async (context) => {
  const { route, $projectServices } = context;
  const { headerRepo } = $projectServices;

  const routesToHideHeader = [
    RoutesName.index,
    RoutesName.authLogin,
    RoutesName.authRegistration,
    RoutesName.pollNew,
    RoutesName.pollNewInviteId,
    RoutesName.pollNewJoinLinkId,
    RoutesName.pollNewShareId,
    RoutesName.pollNewSummaryId
  ];

  const isHeaderHidden = routesToHideHeader.some(item => item === route.name);

  if (isHeaderHidden) {
    void headerRepo.setVisible(false);
    return;
  }

  void headerRepo.setVisible(true);
};

export default header;
