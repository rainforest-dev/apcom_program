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
        v-card.event.d-flex.flex-column(:dark="!dark" :light="dark")
          v-card-text.text-center Opening and Award Ceremony
          v-card-actions.align-self-end.mt-auto
            v-icon mdi-map
            v-col.caption 1F, 101
    v-row
      v-col(cols="12" md="2" :class="{ 'pb-0': isMobile }")
        v-card.time(:color="timeCardColor")
          v-card-text.text-center 09:00-09:50
      v-col(cols="12" md="10" :class="{ 'pt-0': isMobile }")
        v-card.speech.d-flex.flex-column(tag="a" href="http://www.apcom2019.org/herbert-mang.html" target="_blank")
          v-card-title Herbert Mang
          v-card-subtitle Multiscale Modeling - Structural Analysis - Experiments
          v-card-actions.align-self-end.mt-auto
                v-icon mdi-map
                v-col.caption 1F, 101
    v-row
      v-col(cols="12" md="2" :class="{ 'pb-0': isMobile }")
        v-card.time(:color="timeCardColor")
          v-card-text.text-center 09:50-10:30
      v-col(cols="12" md="10" :class="{ 'pt-0': isMobile }")
        v-card.speech.d-flex.flex-column(tag="a" href="http://www.apcom2019.org/wing-kam-liu.html" target="_blank")
          v-card-title Wing-Kam Liu
          v-card-subtitle Mechanistic Machine Learning Methods for Mechanical Science and Design/Optimization of Lightweight Material Systems
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
      v-col(cols="12" md="10" :class="{ 'pt-0': isMobile }")
        v-card.event.d-flex.flex-column(:dark="!dark" :light="dark")
          v-card-text.text-center Lunch
          v-card-actions.align-self-end.mt-auto
            v-icon mdi-map
            v-col.caption 3F, Banquet Hall
    v-row
      v-col(cols="12" md="2" :class="{ 'pb-0': isMobile }")
        v-card.time(:color="timeCardColor")
          v-card-text.text-center 13:20-14:00
      v-col(cols="12" md="10" :class="{ 'pt-0': isMobile }")
        v-row(:class="{ 'px-3': isMobile }")
          v-col(cols="12" sm="4" :class="{ 'pa-0': isMobile, 'py-0': !isMobile }")
            v-card.speech.d-flex.flex-column(tag="a" href="http://www.apcom2019.org/ernst-rank.html" target="_blank")
              v-card-title Ernst Rank
              v-card-subtitle Immersed Boundary Methods: Finite Elements Redesigned
              v-card-actions.align-self-end.mt-auto
                v-icon mdi-map
                v-col.caption 1F, 102
          v-col(cols="12" sm="4" :class="{ 'pa-0': isMobile, 'py-0': !isMobile }")
            v-card.speech.d-flex.flex-column(tag="a" href="http://www.apcom2019.org/antonio-huerta.html" target="_blank")
              v-card-title Antonio Huerta
              v-card-subtitle Hybridizable Discontinuous Galerkin: low and high-order approximations for computationally-demanding problems
              v-card-actions.align-self-end.mt-auto
                v-icon mdi-map
                v-col.caption 1F, 101B
          v-col(cols="12" sm="4" :class="{ 'pa-0': isMobile, 'py-0': !isMobile }")
            v-card.speech.d-flex.flex-column(tag="a" href="http://www.apcom2019.org/you-lin-xu.html" target="_blank")
              v-card-title You-Lin Xu
              v-card-subtitle Fatigue Damage Prognosis of Orthotropic Steel Decks of a Cable-stayed Bridge under Moving Vehicles
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
            v-card.speech.d-flex.flex-column(tag="a" href="http://www.apcom2019.org/tomohiro-takaki.html" target="_blank")
              v-card-title Tomohiro Takaki
              v-card-subtitle Multi-GPU Accelerated Large-scale Phase-field Simulations for Dendritic Solidification
              v-card-actions.align-self-end.mt-auto
                v-icon mdi-map
                v-col.caption 1F, 102
          v-col(cols="12" sm="4" :class="{ 'pa-0': isMobile, 'py-0': !isMobile }")
            v-card.speech.d-flex.flex-column(tag="a" href="http://www.apcom2019.org/gui-rong-liu.html" target="_blank")
              v-card-title Gui-Rong Liu
              v-card-subtitle Smoothed Finite Element Methods with High Order Strain Fields	
              v-card-actions.align-self-end.mt-auto
                v-icon mdi-map
                v-col.caption 1F, 101B
          v-col(cols="12" sm="4" :class="{ 'pa-0': isMobile, 'py-0': !isMobile }")
            v-card.speech.d-flex.flex-column(tag="a" href="http://www.apcom2019.org/kengo-nakajima.html" target="_blank")
              v-card-title Kengo Nakajima
              v-card-subtitle An Innovative Method for Integration of Simulation/Data/Learning in the Exascale/Post-Moore Era
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
  name: "dec_18",
  computed: {
    ...mapState({
      parallel_sessions: state => state.parallel_sessions.slice(0, 3),
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
