import { Middleware } from '@nuxt/types';
import { RoutesName } from '~/shared/repository/routes/routes-name';
import { HeaderBlockView } from '~/components/header/component';

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
  const routesToRegularHeader = [
    RoutesName.pollId
  ];

  const isHeaderHidden = routesToHideHeader.some(item => item === route.name);
  const isHeaderRegular = routesToRegularHeader.some(item => item === route.name);

  if (isHeaderHidden) {
    void headerRepo.setVisible(false);
    return;
  }

  if (isHeaderRegular) {
    void headerRepo.setView(HeaderBlockView.regular);
    void headerRepo.setVisible(true);
    return;
  }

  void headerRepo.setVisible(true);
  void headerRepo.setView(HeaderBlockView.default);
};

export default header;
