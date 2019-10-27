<template lang="pug">
  v-container
    v-row
      v-col(cols="12" md="2") 
        v-card.time
          v-card-text 08:00-08:30
      v-col(cols="12" md="10")
        v-card.event
          v-card-text Registration
    v-row
      v-col(cols="12" md="2")
        v-card.time
          v-card-text 08:30-09:00
      v-col(cols="12" md="10")
        v-card.event
          v-card-text Opening and Award Ceremony
    v-row
      v-col(cols="12" md="2")
        v-card.time
          v-card-text 09:00-09:50
      v-col(cols="12" md="10")
        v-card.speech
          v-card-title Herbert Mang
          v-card-subtitle Multiscale Modeling - Structural Analysis - Experiments
    v-row
      v-col(cols="12" md="2")
        v-card.time
          v-card-text 09:50-10:30
      v-col(cols="12" md="10")
        v-card.speech
          v-card-title Wing-Kam Liu
          v-card-subtitle Mechanistic Machine Learning Methods for Mechanical Science and Design/Optimization of Lightweight Material Systems
    v-row
      v-col(cols="12" md="2")
        v-card.time
          v-card-text 10:30-10:50
      v-col(cols="12" md="10")
        v-card.event
          v-card-text Coffee Break
    v-row
      v-col(cols="12" md="2")
        v-card.time
          v-card-text 10:50-12:20
      v-col(cols="12" md="10")
        ParallelSession(:mss="parallel_sessions[0]")
    v-row
      v-col(cols="12" md="2")
        v-card.time
          v-card-text 12:20-13:20
      v-col(cols="12" md="10")
        v-card.event
          v-card-text Lunch
    v-row
      v-col(cols="12" md="2")
        v-card.time
          v-card-text 13:20-14:00
      v-col(cols="12" md="10")
        v-row
          v-col(cols="12" sm="4")
            v-card.speech
              v-card-title Ernst Rank
              v-card-subtitle Immersed Boundary Methods: Finite Elements Redesigned
          v-col(cols="12" sm="4")
            v-card.speech
              v-card-title Antonio Huerta
              v-card-subtitle Hybridizable Discontinuous Galerkin: low and high-order approximations for computationally-demanding problems
          v-col(cols="12" sm="4")
            v-card.speech
              v-card-title You-Lin Xu
              v-card-subtitle Fatigue Damage Prognosis of Orthotropic Steel Decks of a Cable-stayed Bridge under Moving Vehicles
    v-row
      v-col(cols="12" md="2")
        v-card.time
          v-card-text 14:00-14:40
      v-col(cols="12" md="10")
        v-row
          v-col(cols="12" sm="4")
            v-card.speech
              v-card-title Tomohiro Takaki
              v-card-subtitle Multi-GPU Accelerated Large-scale Phase-field Simulations for Dendritic Solidification
          v-col(cols="12" sm="4")
            v-card.speech
              v-card-title Gui-Rong Liu
              v-card-subtitle Smoothed Finite Element Methods with High Order Strain Fields	
          v-col(cols="12" sm="4")
            v-card.speech
              v-card-title Kengo Nakajima
              v-card-subtitle An Innovative Method for Integration of Simulation/Data/Learning in the Exascale/Post-Moore Era
    v-row
      v-col(cols="12" md="2")
        v-card.time
          v-card-text 14:40-15:00
      v-col(cols="12" md="10")
        v-card.event
          v-card-text Coffee Break
    v-row
      v-col(cols="12" md="2")
        v-card.time
          v-card-text 15:00-16:30
      v-col(cols="12" md="10")
        ParallelSession(:mss="parallel_sessions[1]")
    v-row
      v-col(cols="12" md="2")
        v-card.time
          v-card-text 16:30-16:40
      v-col(cols="12" md="10")
        v-card.event
          v-card-text Short Break
    v-row
      v-col(cols="12" md="2")
        v-card.time
          v-card-text 16:40-18:10
      v-col(cols="12" md="10")
        ParallelSession(:mss="parallel_sessions[2]")
    v-row
      v-col(cols="12" md="2")
        v-card.time
          v-card-text 18:10-21:00
      v-col(cols="12" md="10")
        v-card.event
          v-card-text 
</template>
<script>
import ParallelSession from "@/components/ParallelSession"

export default {
  name: "dec 18",
  props: {
    parallel_sessions: Array
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