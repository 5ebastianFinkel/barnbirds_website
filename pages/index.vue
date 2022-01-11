<template>
  <div class="container">
    <logo />
    <h1>Willkommen auf der Website der Barnbirds</h1>
    <p>Wir sind eine Band aus Münster und Umgebung, die sich der Musik der 60er und 70er Jahre verschrieben hat.</p>
    <instagram-link />
  </div>
</template>

<script>

import { mapMutations } from 'vuex'

export default {
  computed: {
    isPanelOpen () {
      return this.$store.state.navbar.isNavOpen
    }
  },
  methods: {
    ...mapMutations({
      toggle: 'navbar/toggle'
    })
  }
}
</script>
<style scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>
