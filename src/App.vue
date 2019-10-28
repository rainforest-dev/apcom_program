<template lang='pug'>
  v-app
    v-app-bar(app)
      a(href="http://www.apcom2019.org")
        v-toolbar-title.headline.text-uppercase.font-weight-bold.grey--text.text--darken-4 APCOM 2019
      v-spacer
      v-btn(text href="http://www.apcom2019.org/uploads/8/0/5/1/80511818/ms_program_ver1_0.pdf" target="_blank")
        span.mr-2Latest Downdload PDF
    v-content
      router-view 
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: "App",
  data: () => ({
    parallel_sessions_url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vT85LWZ9Cx9hM9XYyL_j1ncLr0scmbqaIakLTcecn8HF9Kad1mCpF_3jqo7iwl4dmejLACm9lArugcm/pub?gid=328538989&single=true&output=csv"
  }),
  mounted() {
    this.loadParallelSessions(this.parallel_sessions_url)
  },
  methods: {
    ...mapActions({ loadParallelSessions: "loadParallelSessions" })
  }
};
</script>
<style lang="scss" scoped>
a {
  text-decoration: none;
}
</style>
