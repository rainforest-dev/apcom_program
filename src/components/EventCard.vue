<template lang="pug">
  v-card.d-flex.flex-column(
    :color="dark ? '' : 'secondary'" 
    :class="{ dark: dark }"
  )
    v-card-text.text-center(v-html="title")
    v-card-actions.align-self-end.mt-auto(v-if="location")
      v-icon mdi-map
      v-col.caption {{ location }}
</template>
<script>
export default {
  name: "event_card",
  props: {
    title: String,
    location: String
  },
  computed: {
    dark: function() {
      return this.$vuetify.theme.dark;
    }
  }
};
</script>
<style lang="scss" scoped>
.dark {
  border: solid 3px var(--v-primary-base);
  box-shadow: 0px 0px 50px var(--v-primary-base) inset;
  background: none;
}
</style>
