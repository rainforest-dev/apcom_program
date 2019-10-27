<template lang="pug">
  v-container
    v-row
      v-col(cols="12" md="2") 
        v-card.time
          v-card-text 08:00-08:30
      v-col(cols="12" md="10")
        v-card.event 
    v-row
      v-col(cols="12" md="2")
        v-card.time
          v-card-text 08:30-09:10
      v-col(cols="12" md="10")
        v-card.event 
    v-row
      v-col(cols="12" md="2")
        v-card.time
          v-card-text 09:10-09:50
      v-col(cols="12" md="10")
        v-card.event 
    v-row
      v-col(cols="12" md="2")
        v-card.time
          v-card-text 09:50-10:30
      v-col(cols="12" md="10")
        v-card.event 
    v-row
      v-col(cols="12" md="2")
        v-card.time
          v-card-text 10:30-10:50
      v-col(cols="12" md="10")
        v-card.event 
    v-row
      v-col(cols="12" md="2")
        v-card.time
          v-card-text 12:20-13:20
      v-col(cols="12" md="10")
        v-card.event 
    v-row
      v-col(cols="12" md="2")
        v-card.time
          v-card-text 13:20-14:00
      v-col(cols="12" md="10")
        v-card.event 
    v-row
      v-col(cols="12" md="2")
        v-card.time
          v-card-text 14:00-14:40
      v-col(cols="12" md="10")
        v-card.event 
    v-row
      v-col(cols="12" md="2")
        v-card.time
          v-card-text 14:40-15:00
      v-col(cols="12" md="10")
        v-card.event 
    v-row
      v-col(cols="12" md="2")
        v-card.time
          v-card-text 15:00-16:30
      v-col(cols="12" md="10")
        v-card.event 
    v-row
      v-col(cols="12" md="2")
        v-card.time
          v-card-text 16:30-16:40
      v-col(cols="12" md="10")
        v-card.event 
    v-row
      v-col(cols="12" md="2")
        v-card.time
          v-card-text 16:40-17:30
      v-col(cols="12" md="10")
        v-card.event 
    v-row
      v-col(cols="12" md="2")
        v-card.time
          v-card-text 17:30-21:00
      v-col(cols="12" md="10")
        v-card.event
          v-card-text Welcome Reception</br>(18:00-20:00)
</template>

<style lang="scss" scoped>
.time {
  @include size(100%);
}
</style>