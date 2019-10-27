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
          v-card-title J.S. Chen
          v-card-subtitle Manifold Learning Based Data-Driven Modeling for Biological Tissues
    v-row
      v-col(cols="12" md="2")
        v-card.time
          v-card-text 09:00-09:50
      v-col(cols="12" md="10")
        v-card.speech
          v-card-title Yoon Young Kim
          v-card-subtitle Advances in Beam-based Analysis Motivated by Efficient Design of Vehicle Body Structures
    v-row
      v-col(cols="12" md="2")
        v-card.time
          v-card-text 09:50-10:30
      v-col(cols="12" md="10")
        v-card.speech
          v-card-title Qing Li
          v-card-subtitle Time-dependent Structural Optimization for Biomedical Problems
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
          v-col(cols="12" sm="6")
            v-card.speech
              v-card-title Jeng-Tzong Chen
              v-card-subtitle 
          v-col(cols="12" sm="6")
            v-card.speech
              v-card-title Andrew Chan
              v-card-subtitle 
    v-row
      v-col(cols="12" md="2")
        v-card.time
          v-card-text 14:00-14:40
      v-col(cols="12" md="10")
        v-row
          v-col(cols="12" sm="6")
            v-card.speech
              v-card-title Nasser Khalili
              v-card-subtitle A Fully Coupled Flow-Deformation Model for Dynamic Analysis of Unsaturated Soils Including Hydraulic and Mechanical Hystereses
          v-col(cols="12" sm="6")
            v-card.speech
              v-card-title Tae Hee Lee
              v-card-subtitle Analysis and Optimization of a Piezoelectric Energy Harvester for Self-powered Wireless Sensor Systems
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
          v-card-text Banquet
</template>
<script>
import ParallelSession from "@/components/ParallelSession"

export default {
  name: "dec 20",
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