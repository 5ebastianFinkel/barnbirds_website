<template>
  <div class="container">
    <logo />
    <h1>Willkommen auf der Website der Barnbirds</h1>
    <p>Die Seite befindet sich aktuell im Aufbau, also kommt bald wieder für mehr Infos</p>
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
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>
