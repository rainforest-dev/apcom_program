<template lang="pug">
  v-row
    v-col(v-for="ms in mss" cols="12" md="3" sm="4" v-if="!isMobile")
      v-card.parallel_session
        v-card-title {{ ms[1] }}
        v-card-text {{ ms[3] }}
    v-col.pt-0(v-if="isMobile")
      v-expansion-panels
        v-expansion-panel
          v-expansion-panel-header Parallel Sessions
          v-expansion-panel-content
            v-row
              v-col.pa-0(v-for="ms in mss" cols="12" md="3" sm="4")
                v-card.parallel_session(outlined tile)
                  v-card-title {{ ms[1] }}
                  v-card-text {{ ms[3] }}
</template>
<script>
export default {
  name: "parallel_session",
  props: {
    mss: Array
  },
  computed: {
    isMobile: function() {
      return this.$vuetify.breakpoint.smAndDown
    }
  },
}
</script>
<style lang="scss" scoped>
.parallel_session {
  @include size(100%);
}
</style>