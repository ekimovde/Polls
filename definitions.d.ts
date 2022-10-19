/* eslint-disable @typescript-eslint/no-explicit-any */
import VueRouter from 'vue-router';
import { NuxtAxiosInstance } from '@nuxtjs/axios';
import { NuxtApp } from '@nuxt/types/app';
import { RawLocation } from 'vue-router/types/router';
import Vue from 'vue';
import { ProjectServices } from '~/shared/repository/repo';

declare global {
 type LocalNavigationGuardNext<V extends Vue = Vue> = (
   to?: RawLocation | false | ((vm: V) => any) | void
 ) => void

  const RESPOND_MOCK_RESULT_DELAY: number;
  const USE_FAKE_BACKEND: boolean;
  const USE_PHOTO_STUB: boolean;
  const SHOP_DATA_REQUEST_INTERVAL_IN_MINUTES: number;
  const FILE_UPLOAD_LIMIT_IN_BYTES: number;
}

declare module 'vue/types/vue' {
  interface Vue {
    b: Block
    $projectServices: ProjectServices
    $nuxt: NuxtApp
  }
}

declare module 'vue-router' {
  interface Route {
    title: string
  }
  interface Vue {
    $route: Route
    $router: VueRouter
  }
}

interface Block {
  (element?: string, mods?: ModsType | null): string;
  (mods?: ModsType): string;
}

interface ModsType {
  [key: string]: boolean | string | number | undefined;
}

declare module '@nuxt/types' {
  interface Context {
    $axios: NuxtAxiosInstance
    $projectServices: ProjectServices
  }
}

declare module 'axios' {
  interface AxiosRequestConfig {
    showLoader?: boolean
    skipAuth?: boolean
  }
}
