<template>
  <div class="sidebar">
    <div v-if="isPanelOpen" class="sidebar-backdrop" @click="closeSidebarPanel" />
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
export default {
  data: () => ({
    isPanelOpen: false
  }),
  methods: {
    closeSidebarPanel () {
      this.isPanelOpen = false
    }
  }
}
</script>
