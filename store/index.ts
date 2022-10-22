import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import { ProjectStore } from './model';
import user from '~/store/modules/user';
import loader from '~/store/modules/loader';
import notification from '~/store/modules/notification';
import header from '~/store/modules/header';
import footer from '~/store/modules/footer';

Vue.use(Vuex);

const store = (): Store<ProjectStore> => new Vuex.Store({
  modules: {
    user,
    loader,
    notification,
    header,
    footer
  }
}) as Store<ProjectStore>;

export default store;
