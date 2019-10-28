<template lang="pug">
  v-card.speech.d-flex.flex-column(
    tag="a" :href="url" target="_blank"
    :class="{ dark: dark }"
  )
    v-card-title {{ speaker }}
    v-card-subtitle {{ title }}
    v-card-actions.align-self-end.mt-auto
      v-icon mdi-map
      v-col.caption {{ location }}
</template>
<script>
export default {
  name: "speech_card",
  props: {
    title: String,
    speaker: String,
    location: String,
    url: String
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
  //- border: solid 3px map-get($grey, "lighten-5");
  box-shadow: 0px 0px 50px map-get($grey, "lighten-5") inset;
  background: none;
}
</style>
