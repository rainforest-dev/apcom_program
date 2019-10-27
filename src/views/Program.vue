<template lang="pug">
  v-container
    v-row(align="center" justify="center")
      v-btn-toggle(v-model="date" round)
        v-btn(v-for="date in dates") {{ date }}
      Dec17(v-if="date === 0")
      Dec18(v-if="date === 1" :parallel_sessions="parallel_sessions.slice(0, 3)")
      Dec19(v-if="date === 2" :parallel_sessions="parallel_sessions.slice(3, 6)")
      Dec20(v-if="date === 3" :parallel_sessions="parallel_sessions.slice(6, 9)")
</template>
<script>
import { mapState } from "vuex"

import Dec17 from "./tabs/Dec17"
import Dec18 from "./tabs/Dec18"
import Dec19 from "./tabs/Dec19"
import Dec20 from "./tabs/Dec20"

export default {
  name: "program",
  data() {
    return {
      date: 0,
      dates: ["Dec 17", "Dec 18", "Dec 19", "Dec 20", ]
    }
  },
  computed: {
    ...mapState({ parallel_sessions: state => state.parallel_sessions })
  },
  components: {
    Dec17,
    Dec18,
    Dec19,
    Dec20
  }
}
</script>
<style lang="scss" scoped>
</style>