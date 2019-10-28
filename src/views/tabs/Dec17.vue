<template lang="pug">
  v-container
    v-row
      v-col(cols="12" md="2" :class="{ 'pb-0': isMobile }")
        v-card.time(:color="timeCardColor")
          v-card-text.text-center 08:00-08:30
      v-col(cols="12" md="10" :class="{ 'pt-0': isMobile }")
        v-card.event
          v-card-text.text-center 
    v-row
      v-col(cols="12" md="2" :class="{ 'pb-0': isMobile }")
        v-card.time(:color="timeCardColor")
          v-card-text.text-center 08:30-09:00
      v-col(cols="12" md="10" :class="{ 'pt-0': isMobile }")
        v-card.event
          v-card-text.text-center 
    v-row
      v-col(cols="12" md="2" :class="{ 'pb-0': isMobile }")
        v-card.time(:color="timeCardColor")
          v-card-text.text-center 09:00-09:50
      v-col(cols="12" md="10" :class="{ 'pt-0': isMobile }")
        v-card.event
          v-card-text.text-center 
    v-row
      v-col(cols="12" md="2" :class="{ 'pb-0': isMobile }")
        v-card.time(:color="timeCardColor")
          v-card-text.text-center 09:50-10:30
      v-col(cols="12" md="10" :class="{ 'pt-0': isMobile }")
        v-card.event
          v-card-text.text-center 
    v-row
      v-col(cols="12" md="2" :class="{ 'pb-0': isMobile }")
        v-card.time(:color="timeCardColor")
          v-card-text.text-center 10:30-10:50
      v-col(cols="12" md="10" :class="{ 'pt-0': isMobile }")
        v-card.event
          v-card-text.text-center 
    v-row
      v-col(cols="12" md="2" :class="{ 'pb-0': isMobile }")
        v-card.time(:color="timeCardColor")
          v-card-text.text-center 10:50-12:20
      v-col(cols="12" md="10" :class="{ 'pt-0': isMobile }")
        v-card.event
          v-card-text.text-center 
    v-row
      v-col(cols="12" md="2" :class="{ 'pb-0': isMobile }")
        v-card.time(:color="timeCardColor")
          v-card-text.text-center 12:20-13:20
      v-col(cols="12" md="10" :class="{ 'pt-0': isMobile }")
        v-card.event
          v-card-text.text-center 
    v-row
      v-col(cols="12" md="2" :class="{ 'pb-0': isMobile }")
        v-card.time(:color="timeCardColor")
          v-card-text.text-center 13:20-14:00
      v-col(cols="12" md="10" :class="{ 'pt-0': isMobile }")
        v-card.event
          v-card-text.text-center 
    v-row
      v-col(cols="12" md="2" :class="{ 'pb-0': isMobile }")
        v-card.time(:color="timeCardColor")
          v-card-text.text-center 14:00-14:40
      v-col(cols="12" md="10" :class="{ 'pt-0': isMobile }")
        v-card.event
          v-card-text.text-center 
    v-row
      v-col(cols="12" md="2" :class="{ 'pb-0': isMobile }")
        v-card.time(:color="timeCardColor")
          v-card-text.text-center 14:40-15:00
      v-col(cols="12" md="10" :class="{ 'pt-0': isMobile }")
        v-card.event
          v-card-text.text-center 
    v-row
      v-col(cols="12" md="2" :class="{ 'pb-0': isMobile }")
        v-card.time(:color="timeCardColor")
          v-card-text.text-center 15:00-16:30
      v-col(cols="12" md="10" :class="{ 'pt-0': isMobile }")
        v-card.event.d-flex.flex-column(:dark="!dark" :light="dark")
          v-card-text.text-center APACM EC meeting
          v-card-actions.align-self-end.mt-auto
            v-icon mdi-map
            v-col.caption 4F, Elegance Lounge
    v-row
      v-col(cols="12" md="2" :class="{ 'pb-0': isMobile }")
        v-card.time(:color="timeCardColor")
          v-card-text.text-center 16:30-16:40
      v-col(cols="12" md="10" :class="{ 'pt-0': isMobile }")
        v-card.event
          v-card-text.text-center 
    v-row
      v-col(cols="12" md="2" :class="{ 'pb-0': isMobile }")
        v-card.time(:color="timeCardColor")
          v-card-text.text-center 16:40-18:00
      v-col(cols="12" md="10" :class="{ 'pt-0': isMobile }")
        v-card.event
          v-card-text.text-center 
    v-row
      v-col(cols="12" md="2" :class="{ 'pb-0': isMobile }")
        v-card.time(:color="timeCardColor")
          v-card-text.text-center 18:00-20:00
      v-col(cols="12" md="10" :class="{ 'pt-0': isMobile }")
        v-card.event.d-flex.flex-column(:dark="!dark" :light="dark")
          v-card-text.text-center Welcome Reception
          v-card-text.text-center.warning--text.text--darken.pa-0 Registration(17:30-18:30)
          v-card-actions.align-self-end.mt-auto
            v-icon mdi-map
            v-col.caption 4F, V.I.P. Room, TICC
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "dec_17",
  computed: {
    ...mapState({ dark: state => state.dark }),
    isMobile: function() {
      return this.$vuetify.breakpoint.smAndDown;
    },
    timeCardColor: function() {
      if (this.$vuetify.theme.dark) {
        return this.$vuetify.breakpoint.smAndDown ? "#616161" : "#424242";
      } else {
        return this.$vuetify.breakpoint.smAndDown ? "#E0E0E0" : "#FAFAFA";
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.time,
.event {
  @include size(100%);
}
</style>
