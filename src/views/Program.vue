<template lang="pug">
  v-container
    v-row(align="center" justify="center")
      v-btn-toggle(v-if="!isMobile" v-model="date" round)
        v-btn(v-for="date in dates" :to="'/program/'+date.substring(date.length-2, date.length)") {{ date }}
      transition(name="slide-fade" mode="out-in")
        router-view
      v-bottom-navigation(v-if="isMobile" app horizontal hide-on-scroll scroll-threshold=0)
        v-btn(v-for="date in dates" :to="'/program/'+date.substring(date.length-2, date.length)" :width="100/dates.length+'%'") {{ date }}
</template>
<script>
export default {
  name: "program",
  data() {
    return {
      date: 1,
      dates: ["Dec 17", "Dec 18", "Dec 19", "Dec 20", ]
    }
  },
  computed: {
    isMobile: function() {
      return this.$vuetify.breakpoint.smAndDown
    }
  }
}
</script>
<style lang="scss" scoped>
</style>