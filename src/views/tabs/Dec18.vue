<template lang="pug">
  v-container
    v-row
      v-col {{ wishlist }}
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
        EventCard(title="Opening and Award Ceremony" location="101, 1F")
    v-row
      v-col(cols="12" md="2" :class="{ 'pb-0': isMobile }")
        v-card.time(:color="timeCardColor")
          v-card-text.text-center 09:00-09:50
      v-col(cols="12" md="10" :class="{ 'pt-0': isMobile }")
        SpeechCard(
          title="Multiscale Modeling - Structural Analysis - Experiments"
          speaker="Herbert Mang"
          location="101, 1F"
          url="http://www.apcom2019.org/herbert-mang.html"
        )
    v-row
      v-col(cols="12" md="2" :class="{ 'pb-0': isMobile }")
        v-card.time(:color="timeCardColor")
          v-card-text.text-center 09:50-10:30
      v-col(cols="12" md="10" :class="{ 'pt-0': isMobile }")
        SpeechCard(
          title="Mechanistic Machine Learning Methods for Mechanical Science and Design/Optimization of Lightweight Material Systems"
          speaker="Wing-Kam Liu"
          location="101, 1F"
          url="http://www.apcom2019.org/wing-kam-liu.html"
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
      v-col(cols="12" md="10" :class="{ 'pt-0': isMobile }")
        EventCard(title="Lunch" location="Banquet Hall, 3F")
    v-row
      v-col(cols="12" md="2" :class="{ 'pb-0': isMobile }")
        v-card.time(:color="timeCardColor")
          v-card-text.text-center 13:20-14:00
      v-col(cols="12" md="10" :class="{ 'pt-0': isMobile }")
        v-row(:class="{ 'px-3': isMobile }")
          v-col(cols="12" sm="4" :class="{ 'pa-0': isMobile, 'py-0': !isMobile }")
            SpeechCard(
              title="Immersed Boundary Methods: Finite Elements Redesigned"
              speaker="Ernst Rank"
              location="102, 1F"
              url="http://www.apcom2019.org/ernst-rank.html"
            )
          v-col(cols="12" sm="4" :class="{ 'pa-0': isMobile, 'py-0': !isMobile }")
            SpeechCard(
              title="Hybridizable Discontinuous Galerkin: low and high-order approximations for computationally-demanding problems"
              speaker="Antonio Huerta"
              location="101B, 1F"
              url="http://www.apcom2019.org/antonio-huerta.html"
            )
          v-col(cols="12" sm="4" :class="{ 'pa-0': isMobile, 'py-0': !isMobile }")
            SpeechCard(
              title="Multi-scale Fatigue Damage Prognosis of Orthotropic Steel Decks of a Cable-stayed Bridge under Moving Vehicles"
              speaker="You-Lin Xu"
              location="101C, 1F"
              url="http://www.apcom2019.org/you-lin-xu.html"
            )
    v-row
      v-col(cols="12" md="2" :class="{ 'pb-0': isMobile }")
        v-card.time(:color="timeCardColor")
          v-card-text.text-center 14:00-14:40
      v-col(cols="12" md="10" :class="{ 'pt-0': isMobile }")
        v-row(:class="{ 'px-3': isMobile }")
          v-col(cols="12" sm="4" :class="{ 'pa-0': isMobile, 'py-0': !isMobile }")
            SpeechCard(
              title="Multi-GPU Accelerated Large-scale Phase-field Simulations for Dendritic Solidification"
              speaker="Tomohiro Takaki"
              location="102, 1F"
              url="http://www.apcom2019.org/tomohiro-takaki.html"
            )
          v-col(cols="12" sm="4" :class="{ 'pa-0': isMobile, 'py-0': !isMobile }")
            SpeechCard(
              title="Smoothed Finite Element Methods with High Order Strain Fields	"
              speaker="Gui-Rong Liu"
              location="101B, 1F"
              url="http://www.apcom2019.org/gui-rong-liu.html"
            )
          v-col(cols="12" sm="4" :class="{ 'pa-0': isMobile, 'py-0': !isMobile }")
            SpeechCard(
              title="An Innovative Method for Integration of Simulation/Data/Learning in the Exascale/Post-Moore Era"
              speaker="Kengo Nakajima"
              location="101C, 1F"
              url="http://www.apcom2019.org/kengo-nakajima.html"
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

import { db } from "@/store/db";

import EventCard from "@/components/EventCard";
import SpeechCard from "@/components/SpeechCard";
import ParallelSession from "@/components/ParallelSession";

export default {
  name: "dec_18",
  data() {
    return {
      wishlist: []
    };
  },
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
  firestore: {
    wishlist: db.collection("wishlist")
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
