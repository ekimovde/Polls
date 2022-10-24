import { Route } from 'vue-router';
import { RoutesName } from './routes-name';
import { Routes } from '../constants';

type PollRoutes = Pick<Routes,
  RoutesName.pollId |
  RoutesName.pollNew |
  RoutesName.pollSettingsId |
  RoutesName.pollInviteId |
  RoutesName.pollNewInviteId |
  RoutesName.pollNewJoinLinkId |
  RoutesName.pollNewShareId |
  RoutesName.pollNewSummaryId |
  RoutesName.pollMembersId
>

enum PollRoutesTitle {
  poll = 'Опрос'
}

export const pollRoutes: PollRoutes = {
  [RoutesName.pollId]: {
    name: RoutesName.pollId,
    meta: {
      title: PollRoutesTitle.poll
    }
  },
  [RoutesName.pollNew]: {
    name: RoutesName.pollNew,
    meta: {
      title: PollRoutesTitle.poll
    }
  },
  [RoutesName.pollSettingsId]: {
    name: RoutesName.pollSettingsId,
    meta: {
      title: PollRoutesTitle.poll
    }
  },
  [RoutesName.pollInviteId]: {
    name: RoutesName.pollInviteId,
    meta: {
      title: PollRoutesTitle.poll
    }
  },
  [RoutesName.pollNewInviteId]: {
    name: RoutesName.pollNewInviteId,
    meta: {
      title: PollRoutesTitle.poll
    }
  },
  [RoutesName.pollNewJoinLinkId]: {
    name: RoutesName.pollNewJoinLinkId,
    meta: {
      title: PollRoutesTitle.poll
    }
  },
  [RoutesName.pollNewShareId]: {
    name: RoutesName.pollNewShareId,
    meta: {
      title: PollRoutesTitle.poll
    }
  },
  [RoutesName.pollNewSummaryId]: {
    name: RoutesName.pollNewSummaryId,
    meta: {
      title: PollRoutesTitle.poll
    }
  },
  [RoutesName.pollMembersId]: {
    name: RoutesName.pollMembersId,
    meta: {
      title: PollRoutesTitle.poll
    }
  }
};

export const getPollIdRoute = (id: string): Partial<Route> => {
  return {
    ...pollRoutes[RoutesName.pollId],
    params: {
      id
    }
  };
};

export const getPollSettingsIdRoute = (id: string): Partial<Route> => {
  return {
    ...pollRoutes[RoutesName.pollSettingsId],
    params: {
      id
    }
  };
};

export const getPollNewInviteIdRoute = (id: string): Partial<Route> => {
  return {
    ...pollRoutes[RoutesName.pollNewInviteId],
    params: {
      id
    }
  };
};

export const getPollNewJoinLinkIdRoute = (id: string): Partial<Route> => {
  return {
    ...pollRoutes[RoutesName.pollNewJoinLinkId],
    params: {
      id
    }
  };
};

export const getPollNewShareIdRoute = (id: string): Partial<Route> => {
  return {
    ...pollRoutes[RoutesName.pollNewShareId],
    params: {
      id
    }
  };
};

export const getPollNewSummaryIdRoute = (id: string): Partial<Route> => {
  return {
    ...pollRoutes[RoutesName.pollNewSummaryId],
    params: {
      id
    }
  };
};

export const getPollMembersIdRoute = (id: string): Partial<Route> => {
  return {
    ...pollRoutes[RoutesName.pollMembersId],
    params: {
      id
    }
  };
};
