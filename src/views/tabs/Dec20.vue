<template lang="pug">
  v-container
    v-row
      v-col(cols="12" md="2" :class="{ 'pb-0': isMobile }") 
        v-card.time(:color="timeCardColor")
          v-card-text.text-center 08:00-08:30
      v-col(cols="12" md="10" :class="{ 'pt-0': isMobile }")
        v-card.event(:dark="!dark" :light="dark")
          v-card-text.text-center Registration
    v-row
      v-col(cols="12" md="2" :class="{ 'pb-0': isMobile }")
        v-card.time(:color="timeCardColor")
          v-card-text.text-center 08:30-09:00
      v-col(cols="12" md="10" :class="{ 'pt-0': isMobile }")
        v-card.speech.d-flex.flex-column(tag="a" href="http://www.apcom2019.org/jiun-shyan-chen.html" target="_blank")
          v-card-title J.S. Chen
          v-card-subtitle Manifold Learning Based Data-Driven Modeling for Biological Tissues
          v-card-actions.align-self-end.mt-auto
                v-icon mdi-map
                v-col.caption 1F, 101
    v-row
      v-col(cols="12" md="2" :class="{ 'pb-0': isMobile }")
        v-card.time(:color="timeCardColor")
          v-card-text.text-center 09:00-09:50
      v-col(cols="12" md="10" :class="{ 'pt-0': isMobile }")
        v-card.speech.d-flex.flex-column(tag="a" href="http://www.apcom2019.org/yoon-young-kim.html" target="_blank")
          v-card-title Yoon Young Kim
          v-card-subtitle Advances in Beam-based Analysis Motivated by Efficient Design of Vehicle Body Structures
          v-card-actions.align-self-end.mt-auto
                v-icon mdi-map
                v-col.caption 1F, 101
    v-row
      v-col(cols="12" md="2" :class="{ 'pb-0': isMobile }")
        v-card.time(:color="timeCardColor")
          v-card-text.text-center 09:50-10:30
      v-col(cols="12" md="10" :class="{ 'pt-0': isMobile }")
        v-card.speech.d-flex.flex-column(tag="a" href="http://www.apcom2019.org/qing-li.html" target="_blank")
          v-card-title Qing Li
          v-card-subtitle Time-dependent Structural Optimization for Biomedical Problems
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
          v-card-text.text-center APACM GC meeting
          v-card-actions.align-self-end.mt-auto
            v-icon mdi-map
            v-col.caption 3F, North Lounge
    v-row
      v-col(cols="12" md="2" :class="{ 'pb-0': isMobile }")
        v-card.time(:color="timeCardColor")
          v-card-text.text-center 13:20-14:00
      v-col(cols="12" md="10" :class="{ 'pt-0': isMobile }")
        v-row(:class="{ 'px-3': isMobile }")
          v-col(cols="12" sm="6" :class="{ 'pa-0': isMobile, 'py-0': !isMobile }")
            v-card.speech.d-flex.flex-column(tag="a" href="" target="_blank")
              v-card-title Jeng-Tzong Chen
              v-card-subtitle 
              v-card-actions.align-self-end.mt-auto
                v-icon mdi-map
                v-col.caption 1F, 102
          v-col(cols="12" sm="6" :class="{ 'pa-0': isMobile, 'py-0': !isMobile }")
            v-card.speech.d-flex.flex-column(tag="a" href="" target="_blank")
              v-card-title Andrew Chan
              v-card-subtitle 
              v-card-actions.align-self-end.mt-auto
                v-icon mdi-map
                v-col.caption 1F, 101C
    v-row
      v-col(cols="12" md="2" :class="{ 'pb-0': isMobile }")
        v-card.time(:color="timeCardColor")
          v-card-text.text-center 14:00-14:40
      v-col(cols="12" md="10" :class="{ 'pt-0': isMobile }")
        v-row(:class="{ 'px-3': isMobile }")
          v-col(cols="12" sm="6" :class="{ 'pa-0': isMobile, 'py-0': !isMobile }")
            v-card.speech.d-flex.flex-column(tag="a" href="http://www.apcom2019.org/nasser-khalili.html" target="_blank")
              v-card-title Nasser Khalili
              v-card-subtitle A Fully Coupled Flow-Deformation Model for Dynamic Analysis of Unsaturated Soils Including Hydraulic and Mechanical Hystereses
              v-card-actions.align-self-end.mt-auto
                v-icon mdi-map
                v-col.caption 1F, 102
          v-col(cols="12" sm="6" :class="{ 'pa-0': isMobile, 'py-0': !isMobile }")
            v-card.speech.d-flex.flex-column(tag="a" href="http://www.apcom2019.org/tae-hee-lee.html" target="_blank")
              v-card-title Tae Hee Lee
              v-card-subtitle Analysis and Optimization of a Piezoelectric Energy Harvester for Self-powered Wireless Sensor Systems
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
        v-card.event(:dark="!dark" :light="dark")
          v-card-text.text-center Banquet
</template>
<script>
import { mapState } from "vuex";

import ParallelSession from "@/components/ParallelSession";

export default {
  name: "dec_20",
  computed: {
    ...mapState({
      parallel_sessions: state => state.parallel_sessions.slice(6, 9),
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
