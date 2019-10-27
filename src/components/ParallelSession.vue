<template lang="pug">
  v-row
    v-col(v-for="ms in mss" cols="12" md="3" sm="4")
      v-card.parallel_session
        v-card-title {{ ms[1] }}
        v-card-text {{ ms[3] }}
</template>
<script>
export default {
  name: "parallel session",
  props: {
    mss: Array
  }
}
</script>
<style lang="scss" scoped>
.parallel_session {
  @include size(100%);
}
</style>