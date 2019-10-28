<template lang="pug">
  v-row
    v-col(v-for="ms in mss" cols="12" md="3" sm="4" v-if="!isMobile")
      v-card.parallel_session.d-flex.flex-column(
        tag="a" :href="'http://apcom2019.conf.tw/site/order/1243/program.aspx?sid=1243&lang=en&rm_id='+ms[0]" target="_blank"
        :class="{ dark: dark }"
      )
        v-card-subtitle.warning--text.text--darken-2 {{ ms[2] }}
        v-card-title {{ ms[1] }}
        v-card-actions.align-self-end.mt-auto
          v-icon mdi-map
          v-col.caption {{ ms[6] }}, {{ ms[5] }}

    v-col.pt-0(v-if="isMobile")
      v-expansion-panels
        v-expansion-panel(:class="{ dark: dark }")
          v-expansion-panel-header Parallel Sessions
          v-expansion-panel-content
            v-row
              v-col.pa-0(v-for="ms in mss" cols="12" md="3" sm="4")
                v-card.parallel_session.d-flex.flex-column(outlined tile tag="a" :href="'http://apcom2019.conf.tw/site/order/1243/program.aspx?sid=1243&lang=en&rm_id='+ms[0]" target="_blank")
                  v-card-subtitle.warning--text.text--darken-2 {{ ms[2] }}
                  v-card-title {{ ms[1] }}
                  v-card-actions.align-self-end.mt-auto
                    v-icon mdi-map
                    v-col.caption {{ ms[6] }}, {{ ms[5] }}
</template>
<script>
export default {
  name: "parallel_session",
  props: {
    mss: Array
  },
  computed: {
    isMobile: function() {
      return this.$vuetify.breakpoint.smAndDown;
    },
    dark: function() {
      return this.$vuetify.theme.dark;
    }
  }
};
</script>
<style lang="scss" scoped>
.parallel_session {
  @include size(100%);
}
.dark {
  //- border: solid 3px map-get($grey, "lighten-5");
  box-shadow: 0px 0px 50px map-get($grey, "lighten-5") inset;
  background: none;
  .v-card {
    background: none;
  }
}
</style>
