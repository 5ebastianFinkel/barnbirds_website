<template>
  <div id="app">
    <div class="theme no-sidebar">

      <figure>
        <img src="~/static/logo.svg" class="image" alt="Barnbirds Logo">
      </figure>
      <h1>Willkommen auf der Website der Barnbirds</h1>
      <p>Die Seite befindet sich aktuell im Aufbau, also kommt bald wieder für mehr Infos</p>
    </div>
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
<style>

.nuxt-link-active {
  display: block;
  padding: 0 1.5rem;
  line-height: 36px;
  font-size: 1rem;
  font-weight: 600;
  color: var(--c-text);
  white-space: nowrap;
}

.nuxt-link-active:hover {
  text-decoration: none;
  color: var(--c-brand);
}
</style>
