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
        v-card.speech
          v-card-title David J. Srolovitz
          v-card-subtitle On the Mechanics of 2D Alloy Sheets : Application to Transition Metal Dichalcogenides
    v-row
      v-col(cols="12" md="2")
        v-card.time
          v-card-text 09:00-09:50
      v-col(cols="12" md="10")
        v-card.speech
          v-card-title Tayfun Tezduyar
          v-card-subtitle Space-Time Computational Analysis: From Inception to New Generations
    v-row
      v-col(cols="12" md="2")
        v-card.time
          v-card-text 09:50-10:30
      v-col(cols="12" md="10")
        v-card.speech
          v-card-title Hiroshi Okuda
          v-card-subtitle 
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
              v-card-title Wolfgang Wall
              v-card-subtitle 
          v-col(cols="12" sm="4")
            v-card.speech
              v-card-title Maenghyo Cho
              v-card-subtitle Design and Analysis of Photo-responsive polymers: scale bridging between CG MD and shell FE
          v-col(cols="12" sm="4")
            v-card.speech
              v-card-title Sandra Shefelbine
              v-card-subtitle Modeling Musculoskeletal Mechanobiology
    v-row
      v-col(cols="12" md="2")
        v-card.time
          v-card-text 14:00-14:40
      v-col(cols="12" md="10")
        v-row
          v-col(cols="12" sm="4")
            v-card.speech
              v-card-title Chao-An Lin
              v-card-subtitle Single and Multi-phase Simulations Using Artificial Compressibility Method on GPU Cluster
          v-col(cols="12" sm="4")
            v-card.speech
              v-card-title Fangsen Cui
              v-card-subtitle Ultrasonic Wave-based Structural Health Monitoring
          v-col(cols="12" sm="4")
            v-card.speech
              v-card-title Zhao Qin
              v-card-subtitle Multiscale Computational Design of Materials: from nature to engineer
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
  name: "dec 19",
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