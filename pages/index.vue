<template>
  <div id="app">
    <div class="theme no-sidebar">

      <main>
        <body>
        <div v-if="isPanelOpen" class="sidebar-backdrop" @click="closeSidebarPanel" />
        <transition name="slide">
          <div
            v-if="isPanelOpen"
            class="sidebar-panel"
          >
            <nuxt-link to="/posts/ira" @click.prevent="closeSidebarPanel">Home</nuxt-link>
          </div>
        </transition>
        <figure>
          <img src="~/static/logo.svg" class="image" alt="Barnbirds Logo">
        </figure>
        <h1>Willkommen auf der Website der Barnbirds</h1>
        <p>Die Seite befindet sich aktuell im Aufbau, also kommt bald wieder für mehr Infos</p>
        </body>
      </main>
    </div>
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
<style>
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
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  cursor: pointer;
}

.sidebar-panel {
  overflow-y: auto;
  background-color: var(--code-bg-color);
  position: fixed;
  left: 0;
  top: var(--header-height);
  height: 100vh;
  z-index: 999;
  padding: 3rem 20px 2rem 20px;
  width: 300px;
}
</style>
