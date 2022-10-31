import { Middleware } from '@nuxt/types';
import { RoutesName } from '~/shared/repository/routes/routes-name';

const auth: Middleware = async (context) => {
  const { route, store } = context;

  const routesToAuth = [RoutesName.auth, RoutesName.authRegistration];

  const isAuthorized = store.getters['user/isAuthorized'];
  const isAuthPage = routesToAuth.some(item => item === route.name);
  const isIndexPage = route.name === RoutesName.index;

  if (isIndexPage) {
    return;
  }

  if (!isAuthorized && !isAuthPage) {
    return context.redirect({ name: RoutesName.auth });
  }

  if (isAuthorized && isAuthPage) {
    return context.redirect({ name: RoutesName.dashboard });
  }
};

export default auth;
