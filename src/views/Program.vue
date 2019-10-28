<template lang="pug">
  v-container
    v-row(align="center" justify="center")
      v-btn-toggle(v-if="!isMobile" v-model="date" round)
        v-btn(v-for="date in dates" :to="'/program/'+date" :active-class="dark ? 'dark' : 'secondary'") Dec {{ date }}
      transition(name="slide-fade" mode="out-in")
        router-view
      v-bottom-navigation(v-if="isMobile" app horizontal hide-on-scroll scroll-threshold=0)
        v-btn(v-for="date in dates" :to="'/program/'+date" :width="100/dates.length+'%'" :active-class="dark ? 'dark' : 'secondary'") {{ date }}
</template>
<script>
export default {
  name: "program",
  data() {
    return {
      date: 18,
      dates: [17, 18, 19, 20]
    };
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
.dark {
  // border: solid 3px var(--v-primary-base);
  box-shadow: 0px 0px 30px var(--v-primary-base) inset !important;
  background: none;
}
</style>
