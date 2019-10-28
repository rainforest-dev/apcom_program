<template lang="pug">
  v-container
    v-row
      v-col(cols="12" md="2" :class="{ 'pb-0': isMobile }") 
        v-card.time(:color="timeCardColor")
          v-card-text.text-center 08:00-08:30
      v-col(cols="12" md="10" :class="{ 'pt-0': isMobile }")
        v-card.event(:dark="!dark" :light="dark")
          v-card-text.text-center Registration/Onsite
    v-row
      v-col(cols="12" md="2" :class="{ 'pb-0': isMobile }")
        v-card.time(:color="timeCardColor")
          v-card-text.text-center 08:30-09:00
      v-col(cols="12" md="10" :class="{ 'pt-0': isMobile }")
        v-card.speech.d-flex.flex-column(tag="a" href="http://www.apcom2019.org/tayfun-tezduyar.html" target="_blank")
          v-card-title David J. Srolovitz
          v-card-subtitle On the Mechanics of 2D Alloy Sheets : Application to Transition Metal Dichalcogenides
          v-card-actions.align-self-end.mt-auto
                v-icon mdi-map
                v-col.caption 1F, 101
    v-row
      v-col(cols="12" md="2" :class="{ 'pb-0': isMobile }")
        v-card.time(:color="timeCardColor")
          v-card-text.text-center 09:00-09:50
      v-col(cols="12" md="10" :class="{ 'pt-0': isMobile }")
        v-card.speech.d-flex.flex-column(tag="a" href="http://www.apcom2019.org/tayfun-tezduyar.html" target="_blank")
          v-card-title Tayfun Tezduyar
          v-card-subtitle Space-Time Computational Analysis: From Inception to New Generations
          v-card-actions.align-self-end.mt-auto
                v-icon mdi-map
                v-col.caption 1F, 101
    v-row
      v-col(cols="12" md="2" :class="{ 'pb-0': isMobile }")
        v-card.time(:color="timeCardColor")
          v-card-text.text-center 09:50-10:30
      v-col(cols="12" md="10" :class="{ 'pt-0': isMobile }")
        v-card.speech.d-flex.flex-column(tag="a" href="#" target="_blank")
          v-card-title Hiroshi Okuda
          v-card-subtitle 
          v-card-actions.align-self-end.mt-auto
                v-icon mdi-map
                v-col.caption 1F, 101
    v-row
      v-col(cols="12" md="2" :class="{ 'pb-0': isMobile }")
        v-card.time(:color="timeCardColor")
          v-card-text.text-center 10:30-10:50
      v-col(cols="12" md="10" :class="{ 'pt-0': isMobile }")
        v-card.event(:dark="!dark" :light="dark")
          v-card-text.text-center Coffee Break
    v-row
      v-col(cols="12" md="2" :class="{ 'pb-0': isMobile }")
        v-card.time(:color="timeCardColor")
          v-card-text.text-center 10:50-12:20
      v-col(cols="12" md="10" :class="{ 'pt-0': isMobile }")
        ParallelSession(:mss="parallel_sessions[0]")
    v-row
      v-col(cols="12" md="2" :class="{ 'pb-0': isMobile }")
        v-card.time(:color="timeCardColor")
          v-card-text.text-center 12:20-13:20
      v-col(cols="12" md="5" :class="{ 'py-0': isMobile }")
        v-card.event.d-flex.flex-column(:dark="!dark" :light="dark")
          v-card-text.text-center Lunch
          v-card-actions.align-self-end.mt-auto
            v-icon mdi-map
            v-col.caption 3F, Banquet Hall
      v-col(cols="12" md="5" :class="{ 'py-0': isMobile }")
        v-card.event.d-flex.flex-column(:dark="!dark" :light="dark")
          v-card-text.text-center JACM Meeting
          v-card-actions.align-self-end.mt-auto
            v-icon mdi-map
            v-col.caption 3F, North Lounge
    v-row
      v-col(cols="12" md="2" :class="{ 'pb-0': isMobile }")
        v-card.time(:color="timeCardColor")
          v-card-text.text-center 13:20-14:00
      v-col(cols="12" md="10" :class="{ 'pt-0': isMobile }")
        v-row(:class="{ 'px-3': isMobile }")
          v-col(cols="12" sm="4" :class="{ 'pa-0': isMobile, 'py-0': !isMobile }")
            v-card.speech.d-flex.flex-column(tag="a" href="" target="_blank")
              v-card-title Wolfgang Wall
              v-card-subtitle 
              v-card-actions.align-self-end.mt-auto
                v-icon mdi-map
                v-col.caption 1F, 102
          v-col(cols="12" sm="4" :class="{ 'pa-0': isMobile, 'py-0': !isMobile }")
            v-card.speech.d-flex.flex-column(tag="a" href="http://www.apcom2019.org/maenghyo-cho.html" target="_blank")
              v-card-title Maenghyo Cho
              v-card-subtitle Design and Analysis of Photo-responsive polymers: scale bridging between CG MD and shell FE
              v-card-actions.align-self-end.mt-auto
                v-icon mdi-map
                v-col.caption 1F, 101B
          v-col(cols="12" sm="4" :class="{ 'pa-0': isMobile, 'py-0': !isMobile }")
            v-card.speech.d-flex.flex-column(tag="a" href="http://www.apcom2019.org/sandra-shefelbine.html" target="_blank")
              v-card-title Sandra Shefelbine
              v-card-subtitle Modeling Musculoskeletal Mechanobiology
              v-card-actions.align-self-end.mt-auto
                v-icon mdi-map
                v-col.caption 1F, 101C
    v-row
      v-col(cols="12" md="2" :class="{ 'pb-0': isMobile }")
        v-card.time(:color="timeCardColor")
          v-card-text.text-center 14:00-14:40
      v-col(cols="12" md="10" :class="{ 'pt-0': isMobile }")
        v-row(:class="{ 'px-3': isMobile }")
          v-col(cols="12" sm="4" :class="{ 'pa-0': isMobile, 'py-0': !isMobile }")
            v-card.speech.d-flex.flex-column(tag="a" href="http://www.apcom2019.org/chao-an-lin.html" target="_blank")
              v-card-title Chao-An Lin
              v-card-subtitle Single and Multi-phase Simulations Using Artificial Compressibility Method on GPU Cluster
              v-card-actions.align-self-end.mt-auto
                v-icon mdi-map
                v-col.caption 1F, 102
          v-col(cols="12" sm="4" :class="{ 'pa-0': isMobile, 'py-0': !isMobile }")
            v-card.speech.d-flex.flex-column(tag="a" href="http://www.apcom2019.org/fangsen-cui.html" target="_blank")
              v-card-title Fangsen Cui
              v-card-subtitle Ultrasonic Wave-based Structural Health Monitoring
              v-card-actions.align-self-end.mt-auto
                v-icon mdi-map
                v-col.caption 1F, 101B
          v-col(cols="12" sm="4" :class="{ 'pa-0': isMobile, 'py-0': !isMobile }")
            v-card.speech.d-flex.flex-column(tag="a" href="http://www.apcom2019.org/zhao-qin.html" target="_blank")
              v-card-title Zhao Qin
              v-card-subtitle Multiscale Computational Design of Materials: from nature to engineer
              v-card-actions.align-self-end.mt-auto
                v-icon mdi-map
                v-col.caption 1F, 101C
    v-row
      v-col(cols="12" md="2" :class="{ 'pb-0': isMobile }")
        v-card.time(:color="timeCardColor")
          v-card-text.text-center 14:40-15:00
      v-col(cols="12" md="10" :class="{ 'pt-0': isMobile }")
        v-card.event(:dark="!dark" :light="dark")
          v-card-text.text-center Coffee Break
    v-row
      v-col(cols="12" md="2" :class="{ 'pb-0': isMobile }")
        v-card.time(:color="timeCardColor")
          v-card-text.text-center 15:00-16:30
      v-col(cols="12" md="10" :class="{ 'pt-0': isMobile }")
        ParallelSession(:mss="parallel_sessions[1]")
    v-row
      v-col(cols="12" md="2" :class="{ 'pb-0': isMobile }")
        v-card.time(:color="timeCardColor")
          v-card-text.text-center 16:30-16:40
      v-col(cols="12" md="10" :class="{ 'pt-0': isMobile }")
        v-card.event(:dark="!dark" :light="dark")
          v-card-text.text-center Short Break
    v-row
      v-col(cols="12" md="2" :class="{ 'pb-0': isMobile }")
        v-card.time(:color="timeCardColor")
          v-card-text.text-center 16:40-18:10
      v-col(cols="12" md="10" :class="{ 'pt-0': isMobile }")
        ParallelSession(:mss="parallel_sessions[2]")
    v-row
      v-col(cols="12" md="2" :class="{ 'pb-0': isMobile }")
        v-card.time(:color="timeCardColor")
          v-card-text.text-center 18:10-21:00
      v-col(cols="12" md="10" :class="{ 'pt-0': isMobile }")
        v-card.event
          v-card-text.text-center 
</template>
<script>
import { mapState } from "vuex";

import ParallelSession from "@/components/ParallelSession";

export default {
  name: "dec_19",
  computed: {
    ...mapState({
      parallel_sessions: state => state.parallel_sessions.slice(3, 6),
      dark: state => state.dark
    }),
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
  },
  components: {
    ParallelSession
  }
};
</script>
<style lang="scss" scoped>
.time,
.event,
.speech {
  @include size(100%);
}
</style>
