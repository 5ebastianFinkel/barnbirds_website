<template>
  <div class="sidebar">
    <div v-if="isPanelOpen" class="sidebar-backdrop" @click="closeSidebarPanel"/>
    <transition name="slide">
      <div
        v-if="isPanelOpen"
        class="sidebar-panel"
      >
        <slot/>
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
      closSidebarPanel: 'navbar/toggleNav'
    })
  }
}
</script>
