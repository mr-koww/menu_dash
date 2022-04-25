import { store } from "quasar/wrappers";
import { createStore } from "vuex";

import menu from './menu'

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      menu
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING,
  });

  return Store;
});
