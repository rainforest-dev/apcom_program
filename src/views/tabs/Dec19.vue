<template lang="pug">
  v-container
    v-row
      v-col(cols="12" md="2" :class="{ 'pb-0': isMobile }") 
        v-card.time(:color="timeCardColor")
          v-card-text.text-center 08:00-08:30
      v-col(cols="12" md="10" :class="{ 'pt-0': isMobile }")
        EventCard(title="Registration/Onsite")
    v-row
      v-col(cols="12" md="2" :class="{ 'pb-0': isMobile }")
        v-card.time(:color="timeCardColor")
          v-card-text.text-center 08:30-09:00
      v-col(cols="12" md="10" :class="{ 'pt-0': isMobile }")
        SpeechCard(
          title=" On the Mechanics of 2D Alloy Sheets : Application to Transition Metal Dichalcogenides"
          speaker="David J. Srolovitz"
          location="101, 1F"
          url="http://www.apcom2019.org/david-srolovitz.html"
        )
    v-row
      v-col(cols="12" md="2" :class="{ 'pb-0': isMobile }")
        v-card.time(:color="timeCardColor")
          v-card-text.text-center 09:00-09:50
      v-col(cols="12" md="10" :class="{ 'pt-0': isMobile }")
        SpeechCard(
          title=" Space-Time Computational Analysis: From Inception to New Generations"
          speaker="Tayfun Tezduyar"
          location="101, 1F"
          url="http://www.apcom2019.org/tayfun-tezduyar.html"
        )
    v-row
      v-col(cols="12" md="2" :class="{ 'pb-0': isMobile }")
        v-card.time(:color="timeCardColor")
          v-card-text.text-center 09:50-10:30
      v-col(cols="12" md="10" :class="{ 'pt-0': isMobile }")
        SpeechCard(
          title="Role of High Performance Open CAE Applications in Structural Design and Production​"
          speaker="Hiroshi Okuda"
          location="101, 1F"
          url="http://www.apcom2019.org/hirohi-okuda.html"
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
      v-col(cols="12" md="3" :class="{ 'py-0': isMobile }")
        EventCard(title="Lunch" location="Banquet Hall, 3F")
      v-col(cols="12" md="4" :class="{ 'py-0': isMobile }")
        EventCard(title="ACMT Meeting" location="North Lounge, 3F")
      v-col(cols="12" md="3" :class="{ 'py-0': isMobile }")
        EventCard(title="JACM Meeting" location="South Lounge, 3F")
    v-row
      v-col(cols="12" md="2" :class="{ 'pb-0': isMobile }")
        v-card.time(:color="timeCardColor")
          v-card-text.text-center 13:20-14:00
      v-col(cols="12" md="10" :class="{ 'pt-0': isMobile }")
        v-row(:class="{ 'px-3': isMobile }")
          v-col(cols="12" sm="4" :class="{ 'pa-0': isMobile, 'py-0': !isMobile }")
            SpeechCard(
              title="Advanced Methods for Turbulent Flows and Fluid-Structure(-Contact) Interaction"
              speaker="Wolfgang Wall"
              location="102, 1F"
              url="http://www.apcom2019.org/wolfgang-wall.html"
            )
          v-col(cols="12" sm="4" :class="{ 'pa-0': isMobile, 'py-0': !isMobile }")
            SpeechCard(
              title=" Design and Analysis of Photo-responsive polymers: scale bridging between CG MD and shell FE"
              speaker="Maenghyo Cho"
              location="101B, 1F"
              url="http://www.apcom2019.org/maenghyo-cho.html"
            )
          v-col(cols="12" sm="4" :class="{ 'pa-0': isMobile, 'py-0': !isMobile }")
            SpeechCard(
              title=" Modeling Musculoskeletal Mechanobiology"
              speaker="Sandra Shefelbine"
              location="101C, 1F"
              url="http://www.apcom2019.org/sandra-shefelbine.html"
            )
    v-row
      v-col(cols="12" md="2" :class="{ 'pb-0': isMobile }")
        v-card.time(:color="timeCardColor")
          v-card-text.text-center 14:00-14:40
      v-col(cols="12" md="10" :class="{ 'pt-0': isMobile }")
        v-row(:class="{ 'px-3': isMobile }")
          v-col(cols="12" sm="4" :class="{ 'pa-0': isMobile, 'py-0': !isMobile }")
            SpeechCard(
              title=" Single and Multi-phase Simulations Using Artificial Compressibility Method on GPU Cluster"
              speaker="Chao-An Lin"
              location="102, 1F"
              url="http://www.apcom2019.org/chao-an-lin.html"
            )
          v-col(cols="12" sm="4" :class="{ 'pa-0': isMobile, 'py-0': !isMobile }")
            SpeechCard(
              title=" Ultrasonic Wave-based Structural Health Monitoring"
              speaker="Fangsen Cui"
              location="101B, 1F"
              url="http://www.apcom2019.org/fangsen-cui.html"
            )
          v-col(cols="12" sm="4" :class="{ 'pa-0': isMobile, 'py-0': !isMobile }")
            SpeechCard(
              title=" Multiscale Computational Design of Materials: from nature to engineer"
              speaker="Zhao Qin"
              location="101C, 1F"
              url="http://www.apcom2019.org/zhao-qin.html"
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
        v-card.event
          v-card-text.text-center 
</template>
<script>
import { mapState } from "vuex";

import EventCard from "@/components/EventCard";
import SpeechCard from "@/components/SpeechCard";
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
