<template lang="pug">
  v-container
    v-row
      v-col(cols="12" md="2" :class="{ 'pb-0': isMobile }")
        v-card.time(color="#e4e4e4")
          v-card-text.text-center 08:00-08:30
      v-col(cols="12" md="10" :class="{ 'pt-0': isMobile }")
        v-card.event(dark)
          v-card-text.text-center Registration
    v-row
      v-col(cols="12" md="2" :class="{ 'pb-0': isMobile }")
        v-card.time(color="#e4e4e4")
          v-card-text.text-center 08:30-09:00
      v-col(cols="12" md="10" :class="{ 'pt-0': isMobile }")
        v-card.event(dark)
          v-card-text.text-center Opening and Award Ceremony
    v-row
      v-col(cols="12" md="2" :class="{ 'pb-0': isMobile }")
        v-card.time(color="#e4e4e4")
          v-card-text.text-center 09:00-09:50
      v-col(cols="12" md="10" :class="{ 'pt-0': isMobile }")
        v-card.speech
          v-card-title Herbert Mang
          v-card-subtitle Multiscale Modeling - Structural Analysis - Experiments
    v-row
      v-col(cols="12" md="2" :class="{ 'pb-0': isMobile }")
        v-card.time(color="#e4e4e4")
          v-card-text.text-center 09:50-10:30
      v-col(cols="12" md="10" :class="{ 'pt-0': isMobile }")
        v-card.speech
          v-card-title Wing-Kam Liu
          v-card-subtitle Mechanistic Machine Learning Methods for Mechanical Science and Design/Optimization of Lightweight Material Systems
    v-row
      v-col(cols="12" md="2" :class="{ 'pb-0': isMobile }")
        v-card.time(color="#e4e4e4")
          v-card-text.text-center 10:30-10:50
      v-col(cols="12" md="10" :class="{ 'pt-0': isMobile }")
        v-card.event(dark)
          v-card-text.text-center Coffee Break
    v-row
      v-col(cols="12" md="2" :class="{ 'pb-0': isMobile }")
        v-card.time(color="#e4e4e4")
          v-card-text.text-center 10:50-12:20
      v-col(cols="12" md="10" :class="{ 'pt-0': isMobile }")
        ParallelSession(:mss="parallel_sessions[0]")
    v-row
      v-col(cols="12" md="2" :class="{ 'pb-0': isMobile }")
        v-card.time(color="#e4e4e4")
          v-card-text.text-center 12:20-13:20
      v-col(cols="12" md="10" :class="{ 'pt-0': isMobile }")
        v-card.event(dark)
          v-card-text.text-center Lunch
    v-row
      v-col(cols="12" md="2" :class="{ 'pb-0': isMobile }")
        v-card.time(color="#e4e4e4")
          v-card-text.text-center 13:20-14:00
      v-col(cols="12" md="10" :class="{ 'pt-0': isMobile }")
        v-row(:class="{ 'px-3': isMobile }")
          v-col(cols="12" sm="4" :class="{ 'pa-0': isMobile, 'py-0': !isMobile }")
            v-card.speech
              v-card-title Ernst Rank
              v-card-subtitle Immersed Boundary Methods: Finite Elements Redesigned
          v-col(cols="12" sm="4" :class="{ 'pa-0': isMobile, 'py-0': !isMobile }")
            v-card.speech
              v-card-title Antonio Huerta
              v-card-subtitle Hybridizable Discontinuous Galerkin: low and high-order approximations for computationally-demanding problems
          v-col(cols="12" sm="4" :class="{ 'pa-0': isMobile, 'py-0': !isMobile }")
            v-card.speech
              v-card-title You-Lin Xu
              v-card-subtitle Fatigue Damage Prognosis of Orthotropic Steel Decks of a Cable-stayed Bridge under Moving Vehicles
    v-row
      v-col(cols="12" md="2" :class="{ 'pb-0': isMobile }")
        v-card.time(color="#e4e4e4")
          v-card-text.text-center 14:00-14:40
      v-col(cols="12" md="10" :class="{ 'pt-0': isMobile }")
        v-row(:class="{ 'px-3': isMobile }")
          v-col(cols="12" sm="4" :class="{ 'pa-0': isMobile, 'py-0': !isMobile }")
            v-card.speech
              v-card-title Tomohiro Takaki
              v-card-subtitle Multi-GPU Accelerated Large-scale Phase-field Simulations for Dendritic Solidification
          v-col(cols="12" sm="4" :class="{ 'pa-0': isMobile, 'py-0': !isMobile }")
            v-card.speech
              v-card-title Gui-Rong Liu
              v-card-subtitle Smoothed Finite Element Methods with High Order Strain Fields	
          v-col(cols="12" sm="4" :class="{ 'pa-0': isMobile, 'py-0': !isMobile }")
            v-card.speech
              v-card-title Kengo Nakajima
              v-card-subtitle An Innovative Method for Integration of Simulation/Data/Learning in the Exascale/Post-Moore Era
    v-row
      v-col(cols="12" md="2" :class="{ 'pb-0': isMobile }")
        v-card.time(color="#e4e4e4")
          v-card-text.text-center 14:40-15:00
      v-col(cols="12" md="10" :class="{ 'pt-0': isMobile }")
        v-card.event(dark)
          v-card-text.text-center Coffee Break
    v-row
      v-col(cols="12" md="2" :class="{ 'pb-0': isMobile }")
        v-card.time(color="#e4e4e4")
          v-card-text.text-center 15:00-16:30
      v-col(cols="12" md="10" :class="{ 'pt-0': isMobile }")
        ParallelSession(:mss="parallel_sessions[1]")
    v-row
      v-col(cols="12" md="2" :class="{ 'pb-0': isMobile }")
        v-card.time(color="#e4e4e4")
          v-card-text.text-center 16:30-16:40
      v-col(cols="12" md="10" :class="{ 'pt-0': isMobile }")
        v-card.event(dark)
          v-card-text.text-center Short Break
    v-row
      v-col(cols="12" md="2" :class="{ 'pb-0': isMobile }")
        v-card.time(color="#e4e4e4")
          v-card-text.text-center 16:40-18:10
      v-col(cols="12" md="10" :class="{ 'pt-0': isMobile }")
        ParallelSession(:mss="parallel_sessions[2]")
    v-row
      v-col(cols="12" md="2" :class="{ 'pb-0': isMobile }")
        v-card.time(color="#e4e4e4")
          v-card-text.text-center 18:10-21:00
      v-col(cols="12" md="10" :class="{ 'pt-0': isMobile }")
        v-card.event
          v-card-text.text-center 
</template>
<script>
import ParallelSession from "@/components/ParallelSession"

export default {
  name: "dec_18",
  props: {
    parallel_sessions: Array
  },
  computed: {
    isMobile: function() {
      return this.$vuetify.breakpoint.smAndDown
    }
  },
  components: {
    ParallelSession
  }
}
</script>
<style lang="scss" scoped>
.time, .event, .speech {
  @include size(100%);
}
</style>