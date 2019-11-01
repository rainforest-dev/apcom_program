<template lang="pug">
  v-container
    v-row
      v-col(cols="12" md="2" :class="{ 'pb-0': isMobile }") 
        v-card.time(:color="timeCardColor")
          v-card-text.text-center 08:00-08:30
      v-col(cols="12" md="10" :class="{ 'pt-0': isMobile }")
        EventCard(title="Registration")
    v-row
      v-col(cols="12" md="2" :class="{ 'pb-0': isMobile }")
        v-card.time(:color="timeCardColor")
          v-card-text.text-center 08:30-09:00
      v-col(cols="12" md="10" :class="{ 'pt-0': isMobile }")
        SpeechCard(
          title="Manifold Learning Based Data-Driven Modeling for Biological Tissues"
          speaker="J.S. Chen"
          location="101, 1F"
          url="http://www.apcom2019.org/jiun-shyan-chen.html"
        )
    v-row
      v-col(cols="12" md="2" :class="{ 'pb-0': isMobile }")
        v-card.time(:color="timeCardColor")
          v-card-text.text-center 09:00-09:50
      v-col(cols="12" md="10" :class="{ 'pt-0': isMobile }")
        SpeechCard(
          title="Advances in Beam-based Analysis Motivated by Efficient Design of Vehicle Body Structures"
          speaker="Yoon Young Kim"
          location="101, 1F"
          url="http://www.apcom2019.org/yoon-young-kim.html"
        )
    v-row
      v-col(cols="12" md="2" :class="{ 'pb-0': isMobile }")
        v-card.time(:color="timeCardColor")
          v-card-text.text-center 09:50-10:30
      v-col(cols="12" md="10" :class="{ 'pt-0': isMobile }")
        SpeechCard(
          title="Time-dependent Structural Optimization for Biomedical Problems"
          speaker="Qing Li"
          location="101, 1F"
          url="http://www.apcom2019.org/qing-li.html"
        )
    v-row
      v-col(cols="12" md="2" :class="{ 'pb-0': isMobile }")
        v-card.time(:color="timeCardColor")
          v-card-text.text-center 10:30-10:50
      v-col(cols="12" md="10" :class="{ 'pt-0': isMobile }")
        EventCard(title="Coffee Break")
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
        EventCard(title="Lunch" location="Banquet Hall, 3F")
      v-col(cols="12" md="5" :class="{ 'py-0': isMobile }")
        EventCard(title="APACM GC meeting" location="North Lounge, 3F")
    v-row
      v-col(cols="12" md="2" :class="{ 'pb-0': isMobile }")
        v-card.time(:color="timeCardColor")
          v-card-text.text-center 13:20-14:00
      v-col(cols="12" md="10" :class="{ 'pt-0': isMobile }")
        v-row(:class="{ 'px-3': isMobile }")
          v-col(cols="12" sm="6" :class="{ 'pa-0': isMobile, 'py-0': !isMobile }")
            SpeechCard(
              title=" "
              speaker="Jeng-Tzong Chen"
              location="102, 1F"
              url="#"
            )
          v-col(cols="12" sm="6" :class="{ 'pa-0': isMobile, 'py-0': !isMobile }")
            SpeechCard(
              title=" "
              speaker="Andrew Chan"
              location="101C, 1F"
              url="#"
            )
    v-row
      v-col(cols="12" md="2" :class="{ 'pb-0': isMobile }")
        v-card.time(:color="timeCardColor")
          v-card-text.text-center 14:00-14:40
      v-col(cols="12" md="10" :class="{ 'pt-0': isMobile }")
        v-row(:class="{ 'px-3': isMobile }")
          v-col(cols="12" sm="6" :class="{ 'pa-0': isMobile, 'py-0': !isMobile }")
            SpeechCard(
              title="A Fully Coupled Flow-Deformation Model for Dynamic Analysis of Unsaturated Soils Including Hydraulic and Mechanical Hystereses"
              speaker="Nasser Khalili"
              location="102, 1F"
              url="http://www.apcom2019.org/nasser-khalili.html"
            )
          v-col(cols="12" sm="6" :class="{ 'pa-0': isMobile, 'py-0': !isMobile }")
            SpeechCard(
              title="Analysis and Optimization of a Piezoelectric Energy Harvester for Self-powered Wireless Sensor Systems"
              speaker="Tae Hee Lee"
              location="101C, 1F"
              url="http://www.apcom2019.org/tae-hee-lee.html"
            )
    v-row
      v-col(cols="12" md="2" :class="{ 'pb-0': isMobile }")
        v-card.time(:color="timeCardColor")
          v-card-text.text-center 14:40-15:00
      v-col(cols="12" md="10" :class="{ 'pt-0': isMobile }")
        EventCard(title="Coffee Break")
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
        EventCard(title="Short Break")
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
        EventCard(title="Banquet")
</template>
<script>
import { mapState } from "vuex";

import EventCard from "@/components/EventCard";
import SpeechCard from "@/components/SpeechCard";
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
    EventCard,
    SpeechCard,
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
