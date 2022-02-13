import Vue  from 'vue';
import Vuex from 'vuex';

import user from "./user"
import notification from "./notification"

import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex);

const virtual = new Vuex.Store({
  modules: {
    user,
    notification
  },
  plugins: [
    createPersistedState({
      key: "helpy",
      paths: ["user"]
    })
  ]
});

export const store = virtual;
