import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
import Papa from "papaparse";

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
    parallel_sessions: []
  },
  mutations: {
    setParallelSessions(state, parallel_sessions) {
      state.parallel_sessions = parallel_sessions;
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
    }
  },
  modules: {}
});
