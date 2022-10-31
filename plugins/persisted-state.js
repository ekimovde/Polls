import createPersistedState from 'vuex-persistedstate';

const key = 'state';

export default ({ store }) => {
  createPersistedState({
    key,
    paths: [
      'user'
    ]
  })(store);
};
