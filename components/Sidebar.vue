<template>
  <div class="sidebar">
    <div v-if="isPanelOpen" class="sidebar-backdrop" @click="toggle" />
    <transition name="slide">
      <div
        v-if="isPanelOpen"
        class="sidebar-panel"
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

.sidebar-panel {
  overflow-y: auto;
  background-color: var(--c-white-dark);
  position: fixed;
  left: 0;
  top: var(--header-height);
  width: 150px;
  height: 300px;
  z-index: 10;
  padding: 3rem 20px 2rem 20px;
}
</style>
