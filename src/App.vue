<template lang="pug">
  v-app(:dark="dark")
    v-app-bar(app)
      a(href="http://www.apcom2019.org")
        v-toolbar-title.headline.text-uppercase.font-weight-bold.primary--text APCOM 2019
      v-spacer
      v-btn(text :to="$route.path.includes('map') ? '/program' : '/map'")
        v-icon {{ $route.path.includes('map') ? 'mdi-home' : 'mdi-map' }}
      v-btn(text href="http://www.apcom2019.org/uploads/8/0/5/1/80511818/final.pdf" target="_blank")
        v-icon mdi-pdf-box
      v-btn-toggle(v-model="dark" rounded mandatory dense)
        v-btn(:value="false" active-class="secondary")
          v-icon mdi-white-balance-sunny
        v-btn(:value="true" active-class="dark")
          v-icon mdi-moon-waxing-crescent
    v-content
      transition(name="slide-fade" mode="out-in")
        router-view
</template>

<script>
import { mapActions, mapMutations } from "vuex";

export default {
  name: "App",
  data: () => ({
    parallel_sessions_url:
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vT85LWZ9Cx9hM9XYyL_j1ncLr0scmbqaIakLTcecn8HF9Kad1mCpF_3jqo7iwl4dmejLACm9lArugcm/pub?gid=328538989&single=true&output=csv",
    map: true
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
<style lang="scss" scoped>
a {
  text-decoration: none;
}
.dark {
  // border: solid 3px var(--v-primary-base);
  box-shadow: 0px 0px 20px var(--v-primary-base) inset !important;
  background: none;
}
</style>
