import { Plugin } from '@nuxt/types';
import { getModule } from 'vuex-module-decorators';
import { generateUnixTimestamp } from '~/shared/utils/generate-timestamp';
import { initializeAxios } from '~/shared/repository/initialize-axios';
import UserModuleState from '~/store/modules/user';
import LoaderModuleState from '~/store/modules/loader';

let refreshTokenRequest = null;

const axiosPlugin: Plugin = (context) => {
  const { $axios, store } = context;

  initializeAxios($axios);

  const userStore = getModule(UserModuleState, store);
  const loaderStore = getModule(LoaderModuleState, store);

  $axios.interceptors.request.use(
    async (config) => {
      if (config.showLoader) {
        void loaderStore.pending();
      }

      if (config.skipAuth) {
        return config;
      }

      const { isAuthorized } = userStore;

      if (isAuthorized) {
        const dateNowInUnixFormat = Math.floor(Date.now() * 0.001);
        const isAccessTokenValid: boolean = userStore.isAccessTokenValid(dateNowInUnixFormat);

        if (!isAccessTokenValid) {
          if (refreshTokenRequest === null) {
            refreshTokenRequest = userStore.refresh();
          }

          await refreshTokenRequest;
          refreshTokenRequest = null;
        }

        config.headers.AccessToken = `Bearer ${<string>store.state.user.accessToken}`;
      }

      config.params = { ...config.params, t: generateUnixTimestamp() };

      return config;
    },

    error => {
      if (error.config.showLoader) {
        void loaderStore.done();
      }

      return Promise.reject(error);
    }
  );

  $axios.interceptors.response.use(
    response => {
      if (response.config.showLoader) {
        void loaderStore.done();
      }

      return response;
    },
    error => {
      const isErrorInstanceOfError = error instanceof Error;

      if (isErrorInstanceOfError) {
        const { response } = error;
        const { status } = response;

        if (response.config.showLoader) {
          void loaderStore.done();
        }

        if (response.status === 401) {
          void loaderStore.done();
          void userStore.LOGOUT();
        }

        return Promise.reject(status);
      }

      if (error === 401) {
        void loaderStore.done();
        void userStore.LOGOUT();
      }

      return Promise.reject(error);
    }
  );

  $axios.defaults.timeout = 10000;
  $axios.defaults.showLoader = false;
};

export default axiosPlugin;
