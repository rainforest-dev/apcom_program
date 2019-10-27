<template lang='pug'>
  v-app
    v-app-bar(app)
      v-toolbar-title.headline.text-uppercase
        v-btn(text href="http://www.apcom2019.org") APCOM 2019
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
  components: {
    
  },
  data: () => ({
    parallel_sessions_url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSEsMUZ81LDzLqpiXl1UpHFcEmxTpIs5VOnEBiVm8ASGOFpztQNBnSWUziJUmbJdX60F2x7Pd38AUwD/pub?gid=545116619&single=true&output=csv"
  }),
  mounted() {
    this.loadParallelSessions(this.parallel_sessions_url)
  },
  methods: {
    ...mapActions({ loadParallelSessions: "loadParallelSessions" })
  }
};
</script>
<style lang="scss">
* {
  // border: solid 1px;
}
</style>
