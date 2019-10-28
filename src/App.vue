<template lang="pug">
  v-app(:dark="dark")
    v-app-bar(app)
      a(href="http://www.apcom2019.org")
        v-toolbar-title.headline.text-uppercase.font-weight-bold.primary--text APCOM 2019
      v-spacer
      v-btn(text href="http://www.apcom2019.org/uploads/8/0/5/1/80511818/ms_program_ver1_0.pdf" target="_blank")
        v-icon mdi-pdf-box
      v-btn-toggle(v-model="dark" rounded mandatory dense)
        v-btn(:value="false" active-class="primary--text")
          v-icon mdi-white-balance-sunny
        v-btn(:value="true" active-class="primary--text")
          v-icon mdi-moon-waxing-crescent
    v-content
      router-view 
</template>

<script>
import { mapActions, mapMutations } from "vuex";

export default {
  name: "App",
  data: () => ({
    parallel_sessions_url:
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vT85LWZ9Cx9hM9XYyL_j1ncLr0scmbqaIakLTcecn8HF9Kad1mCpF_3jqo7iwl4dmejLACm9lArugcm/pub?gid=328538989&single=true&output=csv"
  }),
  computed: {
    dark: {
      get() {
        return this.$store.state.dark;
      },
      set(value) {
        this.setDark(value);
      }
    }
  },
  mounted() {
    this.loadParallelSessions(this.parallel_sessions_url);
  },
  methods: {
    ...mapActions({ loadParallelSessions: "loadParallelSessions" }),
    ...mapMutations({ setDark: "setDark" })
  }
};
</script>
<style>
* {
  transition: 1s;
}
</style>
<style lang="scss" scoped>
a {
  text-decoration: none;
}
</style>
