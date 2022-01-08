<!--

This is the sidebar component

Author: sfinkel
Created: 2021/10/06 | 10:24 CET

-->
<template>
  <div>
    <div v-if="isPanelOpen" class="sidebar-backdrop" @click="toggle" />
    <transition name="slide">
      <div
        v-if="isPanelOpen"
        class="sidebar"
      >
        <slot />
      </div>
    </transition>
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
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.2s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(-100%);
  transition: all 150ms ease-in 0s;
}

.sidebar-backdrop {
  filter: blur(4px);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  cursor: pointer;
}

.sidebar {
  overflow-y: auto;
  background-color: var(--c-white);
  border-bottom: 1px solid var(--c-divider);
  border-right: 1px solid var(--c-divider);
  position: fixed;
  left: 0;
  top: var(--header-height);
  width: 150px;
  height: 300px;
  z-index: 10;
  padding: 0;
}
</style>
