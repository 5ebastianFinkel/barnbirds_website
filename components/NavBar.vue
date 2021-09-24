<template>
  <div class="nav-bar">
    <div class="sidebar-button">
      <Burger @burgerEvent="toggleSidebarPanel" />
    </div>
    <a href="/" class="nav-bar-title">
      <img src="~/static/logo.svg" alt="Barnbirds Logo" class="logo">
    </a>
  </div>
</template>

<script>

export default {
  name: 'NavBar',
  methods: {
    toggleSidebarPanel () {
      this.isPanelOpen = !this.isPanelOpen
    }
  }
}
</script>
