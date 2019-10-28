import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
import Papa from "papaparse";
import vuetify from "@/plugins/vuetify";

Vue.use(Vuex);

Array.prototype.groupBy = function(prop) {
  return this.reduce((groups, item) => {
    const val = item[prop];
    groups[val] = groups[val] || [];
    groups[val].push(item);
    return groups;
  }, {});
};

export default new Vuex.Store({
  state: {
    parallel_sessions: [],
    dark: false
  },
  mutations: {
    setParallelSessions(state, parallel_sessions) {
      state.parallel_sessions = parallel_sessions;
    },
    setDark(state, value) {
      state.dark = value;
      vuetify.framework.theme.dark = state.dark;
    }
  },
  actions: {
    loadParallelSessions({ commit }, url) {
      Axios.get(url).then(data => {
        const csv = Papa.parse(data.data, Headers).data.slice(1);
        const csv_grouped = csv.groupBy(4);
        const parallel_sessions = Object.keys(csv_grouped).map(
          key => csv_grouped[key]
        );
        commit("setParallelSessions", parallel_sessions);
      });
    },
    toggleDarkMode({ state, commit }) {
      commit("setDark", !state.dark);
    }
  },
  modules: {}
});
