<!--

This is the footer component including the copyright and a link to the 'Impressum'

Author: sfinkel
Created: 2021/10/15 | 22:08 CET

-->
<template>
  <div class="container">
    <span>
    <nuxt-link data-testid="impressum" to="/Impressum">Impressum</nuxt-link><span class="text">| Copyright &copy; 2021-heute The Barnbirds </span>
    </span>
  </div>
</template>

<script>
import { faCopyright } from '@fortawesome/free-regular-svg-icons'

export default {
  name: 'Footer',
  computed: {
    faCopyright () {
      return faCopyright
    }
  }
}
</script>

<style scoped>

.container {
  position: relative;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: var(--z-index-navbar);
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid var(--c-divider);
  padding: 0.7rem 1.5rem 0.7rem 4rem;
  height: var(--header-height);
  background-color: var(--c-bg);
}

.text {
  margin: 0;
  text-align: center;
  line-height: 1.4;
  font-size: 0.9rem;
  color: var(--c-text-light);
}
</style>
